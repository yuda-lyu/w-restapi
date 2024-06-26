import fs from 'fs'
import Hapi from '@hapi/hapi'
import Inert from '@hapi/inert' //提供靜態檔案
import sortBy from 'lodash-es/sortBy.js'
import isfun from 'wsemi/src/isfun.mjs'
import routesToSwagger from './routesToSwagger.mjs'
import routesToAPI from './routesToAPI.mjs'


/**
 * 建立http API伺服器
 *
 * @param {Object} opt 輸入設定參數物件
 * @param {Object} [opt.serverHapi=null] 輸入hapi伺服器物件，若提供，本服務將使用serverHapi.route自動加入apis。預設null
 * @param {Integer} [opt.port=8080] 輸入API伺服器所在port，預設8080
 * @param {String} [opt.docFolder='swdoc'] 輸入swagger伺服器檔案所在資料夾字串，預設'swdoc'，若檔案被誤刪可解壓縮[swdoc.7z]重置
 * @param {String} [opt.apiParent='api'] 輸入網址api所在名稱字串，預設'api'
 * @param {Object} [opt.funcs={}] 輸入伺服器端供使用者端呼叫之函數物件，各key為函數名稱，對應value為函數本體。各函數之輸入需為單一物件，而各函數回傳皆為Promise，可通過resolve與reject回傳結果，預設{}
 * @param {Array} [opt.routes=[]] 輸入伺服器額外掛載routes陣列，預設[]
 * @param {String} [opt.token=''] 輸入呼叫api時的預設金鑰字串，預設''
 * @param {function} [opt.proc=null] 輸入處理api函數，預設null
 */
function WRestapi(opt) {

    //default
    if (!opt.port) {
        opt.port = 8080
    }
    if (!opt.docFolder) {
        opt.docFolder = 'swdoc'
    }
    if (!opt.apiParent) {
        opt.apiParent = 'api'
    }
    if (!opt.routes) {
        opt.routes = []
    }
    if (!isfun(opt.proc)) {
        opt.proc = () => {}
    }

    //apiFile
    let apiFile = {
        method: 'GET',
        path: `/${opt.docFolder}/{file*}`,
        handler: {
            directory: {
                path: `${opt.docFolder}/`
            }
        },
    }

    //apis
    let apis = []
    apis.push(apiFile)

    //sortBy
    opt.routes = sortBy(opt.routes, 'apiName')

    //routesToAPI
    apis = [...apis, ...routesToAPI(opt.routes, opt.apiParent, opt.proc)]

    //routesToSwagger
    let sw = routesToSwagger(`localhost:${opt.port}`, opt.apiParent, opt.routes, opt.token)
    fs.writeFileSync(`./${opt.docFolder}/swagger.json`, JSON.stringify(sw, null, 4), 'utf8')
    //console.log(sw)

    async function startServer() {

        //server
        let server = Hapi.server({
            port: opt.port,
            //host: 'localhost',
            routes: {
                cors: true
            },
        })

        //register inert
        await server.register(Inert)

        //route apis
        server.route(apis)

        //start
        server.start()

        console.log(`Server running at: ${server.info.uri}`)
        console.log(`Server for API Documents running at: ${server.info.uri}/${opt.docFolder}/index.html`)

    }

    if (opt.serverHapi) {
        opt.serverHapi.route(apis)
    }
    else {
        startServer()
    }

}


export default WRestapi
