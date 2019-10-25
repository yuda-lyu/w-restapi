import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'
import getFiles from 'w-package-tools/src/getFiles.mjs'


let fdSrc = './src'
let fdTar = './dist'


rollupFiles({
    fns: getFiles(fdSrc),
    fdSrc,
    fdTar,
    nameDistType: 'kebabCase',
    globals: {
        'fs': 'fs',
        '@hapi/hapi': '@hapi/hapi',
        '@hapi/inert': '@hapi/inert',
        'json5': 'json5',
    },
    external: [
        'fs',
        '@hapi/hapi',
        '@hapi/inert',
        'json5',
    ],
})

