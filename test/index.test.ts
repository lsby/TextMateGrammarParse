import lib from "../dist/"
import js from './js'

var 检测器 = lib()('source.js', js)

it('解析', async function () {
    var 返回 = await 检测器(`
        function sayHello(name) {
            return "Hello, " + name
        }
    `)
    if (返回[1][1].token != 'function') { throw 'err' }
})
