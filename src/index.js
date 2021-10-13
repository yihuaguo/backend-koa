import Koa from 'koa'
import router from './routers/router'
import path from 'path'
import JWT from 'koa-jwt'
import statics from 'koa-static'
import koaBody from 'koa-body'
import helmet from 'koa-helmet'
import json from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'
import config from './config/index'
import errorHandle from './common/ErrorHandle'
const app = new Koa()

// 定义公共目录，不需要jwt鉴权的接口
// public和login开头的接口
const jwt = JWT({
    secret: config.JWT_SECRET
}).unless({
    // path: [/^\/miningMachine/, /^\/message/, /^\/upload/, /\/login/]
    path: [/^\/upload/, /\/login/]
})

const middleware = compose([
    koaBody({
        multipart: true,
        formidable: {
            // 默认2m文件大小
            maxFieldsSize: 200 * 1024 * 1024
        }
    }),
    statics(path.join(__dirname, '../public')),
    cors(),
    json(),
    helmet(),
    errorHandle,
    jwt
])

// 是否开发环境
const isDevMode = (process.env.NODE_ENV === 'production' ? false : true)
if (!isDevMode) {
    app.use(compress())
}

app.use(middleware)
app.use(router())

app.listen(3000)