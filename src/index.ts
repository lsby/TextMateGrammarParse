import * as oniguruma from 'vscode-oniguruma'
import * as vsctm from 'vscode-textmate'
import * as fs from 'fs'
import * as path from 'path'

export default function () {
    var onig_bin = fs.readFileSync(path.join(__dirname, '../bin/onig.wasm')).buffer
    var vscodeOnigurumaLib = oniguruma.loadWASM(onig_bin).then(() => {
        return {
            createOnigScanner(patterns: string[]) { return new oniguruma.OnigScanner(patterns) },
            createOnigString(s: any) { return new oniguruma.OnigString(s) }
        }
    })

    return function (scopeName: string, grammarJson: object) {
        return async function (code: string) {
            var registry = new vsctm.Registry({
                onigLib: vscodeOnigurumaLib,
                loadGrammar: async (sn) => {
                    if (sn === scopeName) { return grammarJson as any }
                    return null
                }
            })

            var r: {
                token: string
                startIndex: number
                endIndex: number
                row: number,
                scopes: string[]
            }[][] = []

            var codeArr = code.replace(/\r/g, '').split('\n')
            var grammar = await registry.loadGrammar(scopeName)
            if (grammar == null) { throw '解析失败' }
            let ruleStack = vsctm.INITIAL
            for (let i = 0; i < codeArr.length; i++) {
                var line = codeArr[i]
                var lineTokens = grammar.tokenizeLine(line, ruleStack)
                r.push(lineTokens.tokens.map((a, i) => ({
                    ...a,
                    token: line.substring(lineTokens.tokens[i].startIndex, lineTokens.tokens[i].endIndex),
                    row: i
                })))
                ruleStack = lineTokens.ruleStack
            }

            return r
        }
    }
}
