// import send from "../config/mailConfig";
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import config from '../config'
import { checkCode } from '../common/Utils'
import User from '../model/User'

class LoginController {
    constructor() { }

    // 登陆
    async login(ctx) {
        // 接收用户的数据
        const { body } = ctx.request
        console.log('body', body)
        let sId = body.sId
        let code = body.code

        // 验证图片验证码的时效和正确性
        const result = await checkCode(sId, code)
        if (result) {
            // 验证用户账号密码是否正确
            let checkUserPasswd = ''
            let user = await User.findOne({
                username: body.username
            })
            // 解码比对
            if (await bcrypt.compare(body.password, user.password)) {
                checkUserPasswd = true
            }
            if (checkUserPasswd) {
                const token = jsonwebtoken.sign({
                    _id: 'brian',
                    // 一天的过期时间 
                    // exp: Math.floor(Date.now() / 1000) + (60 * 60),
                }, config.JWT_SECRET, {
                    // 另外一种设置时间的方式
                    expiresIn: '1d'
                })
                // 返回token
                ctx.body = {
                    code: 200,
                    token
                }
            } else {
                // 账号密码错误
                ctx.status = 500
                ctx.body = {
                    code: 500,
                    msg: '账号密码错误'
                }
            }
        } else {
            ctx.status = 200
            ctx.body = {
                code: 401,
                msg: '图片验证码不正确，请检查！'
            }
        }
    }

    async reg(ctx) {
        // 接收客户端的数据
        const { body } = ctx.request
        // 校验验证码的内容(时效性，有效性)
        let sId = body.sId
        let code = body.code
        let check = true
        let msg = []
        // 验证图片验证码的时效和正确性
        const result = await checkCode(sId, code)
        if (result) {
            // 查库，看username是否存在
            let user1 = await User.findOne({
                username: body.username
            })
            if (user1 !== null && typeof user1.username !== 'undefined') {
                // 配置前端的veevalidata修改数据格式
                msg.username = ['此邮箱已经注册，可以通过邮箱找回密码！']
                check = false
            }
            // 查库，看name是否存在
            let user2 = await User.findOne({
                name: body.name
            })
            if (user2 !== null && typeof user2.name !== 'undefined') {
                msg.name = ['此昵称已经被注册，请修改！']
                check = false
            }
            // 写入数据库，返回成功
            if (check) {
                // 加密存入
                body.password = await bcrypt.hash(body.password, 5)
                let user = new User({
                    username: body.username,
                    name: body.name,
                    password: body.password,
                    created: moment().format('YYYY-MM-DD HH:mm:ss')
                })
                let result = await user.save()
                ctx.body = {
                    code: 200,
                    data: result,
                    msg: '注册成功！'
                }
                return
            }
        } else {
            msg.code = ['验证码已经失效，请重新获取！ ']
        }
        ctx.body = {
            code: 500,
            msg
        }
    }

    // 忘记密码
    async forget(ctx) {
        console.log('ctx', ctx)
        const { body } = ctx.request
        console.log('body', body)
        // try {
        //     const result = await send({
        //         code: body.code,
        //         expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        //         email: body.username,
        //         user: 'Brain'
        //     })
        //     ctx.body = {
        //         code: 200,
        //         data: result,    
        //         msg: '邮件发送成功'
        //     }
        // } catch (e) {
        //     console.log(e)
        // }
    }
}

export default new LoginController()