// jwt验证token校验失败返回401
export default (ctx, next) => {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = {
                code: 401,
                msg: 'Protected resource, use Authorization header to get access\n'
            }
        } else {
            // 统一的接口处理
            ctx.status = err.status || 500
            ctx.body = Object.assign({
                code: 500,
                msg: err.message
            }, process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
        }
    });
}