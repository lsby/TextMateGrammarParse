import * as path from 'path'
import lib from "../dist/"
import js from './js'

var 检测器 = lib(path.join(__dirname, '../node_modules/vscode-oniguruma/release/onig.wasm'))

it('解析', async function () {
    var 返回 = await 检测器('source.js', js, `
        function sayHello(name) {
            return "Hello, " + name
        }
    `)
    if (返回[1][1].token != 'function') { throw 'err' }
})
