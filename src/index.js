import Koa from 'koa'
import router from './routers/router'
import path from 'path'
import statics from 'koa-static'
import koaBody from 'koa-body'
import helmet from 'koa-helmet'
import json from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
const app = new Koa()

const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, '../public')),
    cors(),
    json(),
    helmet()
])

app.use(middleware)
app.use(router())

app.listen(3000)