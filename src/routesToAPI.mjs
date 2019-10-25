import each from 'lodash/each'
import genPm from 'wsemi/src/genPm.mjs'
import isstr from 'wsemi/src/isstr.mjs'


/**
 * 由Routes陣列資料轉hapi的API資料陣列
 *
 * @param {Array} [apis=[]] 輸入既有hapi的apis資料陣列，routes處理完會再新增至apis內，預設[]
 * @param {Array} [routes=[]] 輸入需自動產製的routes資料陣列，每個元素需有'table'欄位，其值給予表名字串，'props'欄位，其值給予欄位物件，預設[]
 * @param {String} [apiParent='api'] 輸入api上層路徑字串，預設'api'
 * @param {Function} [proc=() => {}] 輸入各api處理函數，prop會傳入method(API method),table(表名),propName(指定欄位名稱),propValue(指定欄位值),payload(post時數據),req(hapi的req),res(hapi的res),pm(回傳用Promise)，處理完畢後成功時呼叫pm.resolve回傳，失敗時呼叫pm.reject回傳，預設()=>{}
 * @returns {Array} 回傳hapi的API資料陣列
 */
function routesToAPI(apis = [], routes = [], apiParent = '', proc = () => {}) {

    //basePath
    let basePath = `/`
    if (isstr(apiParent)) {
        basePath = `/${apiParent}/`
    }

    //each routes
    each(routes, (v) => {
        let r

        //GET all
        r = {
            path: basePath + v.table,
            method: 'GET',
            handler: function (req, res) {
                let pm = genPm()

                proc({
                    method: 'GET',
                    table: v.table,
                    propName: null,
                    propValue: null,
                    payload: null,
                    req,
                    res,
                    pm,
                })

                return pm
            },
        }
        apis.push(r)

        //GET props
        each(v.props, (vv, col) => {
            r = {
                path: basePath + v.table + `/${col}/{${col}}`,
                method: 'GET',
                handler: function (req, res) {
                    let pm = genPm()

                    let p = req.params

                    proc({
                        method: 'GET',
                        table: v.table,
                        propName: col,
                        propValue: p[col],
                        payload: null,
                        req,
                        res,
                        pm,
                    })

                    return pm
                },
            }
            apis.push(r)
        })

        //POST, PUT
        each(['POST', 'PUT'], (method) => {

            //POST, PUT all
            r = {
                path: basePath + v.table,
                method,
                handler: function (req, res) {
                    let pm = genPm()

                    let data = req.payload

                    proc({
                        method,
                        table: v.table,
                        propName: null,
                        propValue: null,
                        payload: data,
                        req,
                        res,
                        pm,
                    })

                    return pm
                },
            }
            apis.push(r)

            //POST, PUT props
            each(v.props, (vv, col) => {
                r = {
                    path: basePath + v.table + `/${col}/{${col}}`,
                    method,
                    handler: function (req, res) {
                        let pm = genPm()

                        let p = req.params
                        let data = req.payload

                        proc({
                            method,
                            table: v.table,
                            propName: col,
                            propValue: p[col],
                            payload: data,
                            req,
                            res,
                            pm,
                        })

                        return pm
                    },
                }
                apis.push(r)
            })

        })

        //因安全因素不使用DELETE all

        //DELETE props
        each(v.props, (vv, col) => {
            r = {
                path: basePath + v.table + `/${col}/{${col}}`,
                method: 'DELETE',
                handler: function (req, res) {
                    let pm = genPm()

                    let p = req.params

                    proc({
                        method: 'DELETE',
                        table: v.table,
                        propName: col,
                        propValue: p[col],
                        payload: null,
                        req,
                        res,
                        pm,
                    })

                    return pm
                },
            }
            apis.push(r)
        })

    })

    return apis
}


export default routesToAPI
