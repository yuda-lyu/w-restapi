import JSON5 from 'json5'
import map from 'lodash/map'
import join from 'lodash/join'
import replace from 'wsemi/src/replace.mjs'


let itemGet = `
'get': {
    'tags': [
        '{tag}'
    ],
    'summary': 'select {tag} by {col}',
    'description': 'select {tag} by {col}',
    'parameters': [
        {
            'name': '{col}',
            'in': 'path',
            'description': '{colDescription}',
            'required': true,
            'type': '{colType}',
        }
    ],
    'responses': {
        '200': {
            'description': 'success'
        },
        'default': {
            'description': 'error'
        }
    }
},
`


let itemPost = `
'post': {
    'tags': [
        '{tag}'
    ],
    'summary': 'add or modify {tag} by {col}',
    'description': 'add or modify {tag} by {col}',
    'consumes': [
        'application/json',
    ],
    'parameters': [
        {
            'name': '{col}',
            'in': 'path',
            'description': '{colDescription}',
            'required': true,
            'type': '{colType}',
        },
        {
            'name': 'body',
            'in': 'body',
            'description': '{tag} object in JSON string format',
            'required': true,
            'schema': {
                'type': 'string',
                'properties': {props}
            }
        }
    ],
    'responses': {
        '200': {
            'description': 'success'
        },
        'default': {
            'description': 'error'
        }
    }
},
`


let itemPut = itemPost.replace(`'post':`, `'put':`)


let itemDelete = `
'delete': {
    'tags': [
        '{tag}'
    ],
    'summary': 'delete {tag} by {col}',
    'description': 'delete {tag} by {col}',
    'parameters': [
        {
            'name': '{col}',
            'in': 'path',
            'description': '{colDescription}',
            'required': true,
            'type': '{colType}',
        }
    ],
    'responses': {
        '200': {
            'description': 'success'
        },
        'default': {
            'description': 'error'
        }
    }
},
`


let itemsGet = `
'get': {
    'tags': [
        '{tag}'
    ],
    'summary': 'select all {tag}(s)',
    'description': 'select all {tag}(s)',
    'security': [],
    'responses': {
        '200': {
            'description': 'success'
        },
        'default': {
            'description': 'error'
        }
    }
},
`


let itemsPost = `
'post': {
    'tags': [
        '{tag}'
    ],
    'summary': 'add or modify one or multiple {tag}(s)',
    'description': 'add or modify one or multiple {tag}(s)',
    'consumes': [
        'application/json',
    ],
    'parameters': [
        {
            'name': 'body',
            'in': 'body',
            'description': '{tag} object or array of objects in JSON string format',
            'required': true,
            'schema': {
                'type': 'string',
                'properties': {props}
            }
        }
    ],
    'responses': {
        '200': {
            'description': 'success'
        },
        'default': {
            'description': 'error'
        }
    }
},
`


let itemsPut = itemsPost.replace(`'post':`, `'put':`)


let tagPath = `
'/{tag}': {
    {itemsGet}
    {itemsPost}
    {itemsPut}
},
`


let tagColPath = `
'/{tag}/{col}/{{col}}': {
    {itemGet}
    {itemPost}
    {itemPut}
    {itemDelete}
},
`

let swJSON = `
{
    'swagger': '2.0',
    'info': {
        'description': 'Server API(s) is generated by hapi.',
        'version': '1.0.0',
        'title': 'API Documents'
    },
    'host': '{host}',
    'basePath': '/{basePath}',
    'schemes': [
        'http'
    ],
    'paths': {
        {paths}
    },
}
`


function addPathFromItemProp(col, colDescription, colType) {
    let c = tagColPath
    c = replace(c, `{itemGet}`, itemGet)
    c = replace(c, `{itemPost}`, itemPost)
    c = replace(c, `{itemPut}`, itemPut)
    c = replace(c, `{itemDelete}`, itemDelete)
    c = replace(c, `{col}`, col)
    c = replace(c, `{colDescription}`, colDescription)
    c = replace(c, `{colType}`, colType)
    return c
}


function addPathFromItemProps(props) {
    let c = map(props, (p, col) => {
        return addPathFromItemProp(col, p.description, p.type)
    })
    return join(c, '')
}


function addPathFromItems() {
    let c = tagPath
    c = replace(c, `{itemsGet}`, itemsGet)
    c = replace(c, `{itemsPost}`, itemsPost)
    c = replace(c, `{itemsPut}`, itemsPut)
    return c
}


function addPath(tag, props) {
    let c = ''
    c += addPathFromItems()
    c += addPathFromItemProps(props)
    c = replace(c, `{tag}`, tag)
    c = replace(c, `{props}`, JSON.stringify(props))
    return c
}


function genPathsFromRoutes(routes) {
    let c = map(routes, (v) => {
        let tag = v.table
        let props = v.props
        return addPath(tag, props)
    })
    return join(c, '')
}


function genSWJson(host, basePath, routes) {
    let paths = genPathsFromRoutes(routes)
    let c = swJSON
    c = replace(c, `{host}`, host)
    c = replace(c, `{basePath}`, basePath)
    c = replace(c, `{paths}`, paths)
    return JSON5.parse(c)
}


/**
 * 由Routes陣列資料轉Swagger的設定物件
 *
 * @param {String} [host='localhost:8080'] 輸入伺服器所在host字串，預設'localhost:8080'
 * @param {String} [apiParent='api'] 輸入api上層路徑字串，預設'api'
 * @param {Array} [routes=[]] 輸入Routes陣列，每個物件皆需要有表名字串'table'、主鍵名字串'pk'、物件所屬欄位物件'props'，預設[]
 * @returns {Object} 回傳Swagger的設定物件
 */
function routesToSwagger(host = 'localhost:8080', apiParent = 'api', routes = []) {
    return genSWJson(host, apiParent, routes)
}


export default routesToSwagger
