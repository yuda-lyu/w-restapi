import WRestapi from './src/WRestapi.mjs'

let routes = [
    {
        table: 'pet',
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
    {
        table: 'store',
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
]

function proc({ method, table, propName, propValue, payload, pm, req, res }) {
    //可由req內資訊做身份驗證

    //resolve
    pm.resolve(JSON.stringify({ method, table, propName, propValue, payload }))
    console.log(method, table, propName, propValue, payload)

}

new WRestapi({ routes, proc })

