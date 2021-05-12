import WRestapi from './src/WRestapi.mjs'

let routes = [
    {
        apiName: 'store',
        props: {
            'id': {
                'type': 'string',
                'description': 'id description',
            },
            'prodName': {
                'type': 'string',
                'description': 'prodName description',
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
            'petName': {
                'type': 'string',
                'description': 'petName description',
            },
            'petAge': {
                'type': 'string',
                'description': 'petAge description',
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

new WRestapi({ routes, proc, token: 'defToken' })

//node --experimental-modules --es-module-specifier-resolution=node srv.mjs
