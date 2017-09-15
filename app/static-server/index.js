//静态资源服务
const fs = require('fs');
const path = require('path');
let getPath = url => path.resolve(process.cwd(), 'public', `.${url}`);

let staticFunction = ctx => {
    let {url} = ctx.req;
    let {resCtx} = ctx;
    return new Promise((resolve, reject) => {
        if (url == '/') {
            url = '/index.html';
        }
        let _path = getPath(url);
        let body = fs.readFile(_path, (err, data) => {
            if (err) {
                resCtx.body = `Not FOUND ${err.stack}`;
            //resolve(err)
            }
            resCtx.body = data;
            resolve(data);
        })
    })
}
module.exports = staticFunction