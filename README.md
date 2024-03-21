# w-restapi
A REST API server with swagger.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-restapi.svg?style=flat)](https://npmjs.org/package/w-restapi) 
[![license](https://img.shields.io/npm/l/w-restapi.svg?style=flat)](https://npmjs.org/package/w-restapi) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-restapi/master/dist/w-restapi.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-restapi)
[![npm download](https://img.shields.io/npm/dt/w-restapi.svg)](https://npmjs.org/package/w-restapi) 
[![npm download](https://img.shields.io/npm/dm/w-restapi.svg)](https://npmjs.org/package/w-restapi) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-restapi.svg)](https://www.jsdelivr.com/package/npm/w-restapi)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-restapi/global.html).

## Installation
### Using npm(ES6 module):
> **Note:** `w-restapi` is mainly dependent on `@hapi/hapi` and `@hapi/inert`.

```alias
npm i w-restapi
```
#### Example for `w-restapi`:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-restapi/blob/master/srv.mjs)]
```alias
import WRestapi from 'w-restapi'

let routes = [
    {
        apiName: 'store',
        props: {
            'id': {
                'type': 'string',
                'description': 'id description',
            },
            'prodcname': {
                'type': 'string',
                'description': 'prodcname description',
            },
            'price': {
                'type': 'number',
                'description': 'price description',
            }
        },
    },
    {
        apiName: 'pet',
        props: {
            'id': {
                'type': 'string',
                'description': 'id description',
            },
            'petname': {
                'type': 'string',
                'description': 'petname description',
            },
            'belognname': {
                'type': 'string',
                'description': 'belognname description',
            }
        },
    },
]

function proc({ method, apiName, propName, propValue, payload, pm, req, res }) {
    //可由req內資訊做身份驗證

    //resolve
    pm.resolve(JSON.stringify({ method, apiName, propName, propValue, payload }))
    console.log(method, apiName, propName, propValue, payload)

}

new WRestapi({ routes, proc })

//view swagger: http://localhost:8080/swdoc/index.html
```
