import {
    sendLogin
} from "../config/MysqlHelper"
import config from '../config/index'
import jsonwebtoken from 'jsonwebtoken'

const {
    usersTable
} = config.TABLENAMELIST

class loginController {
    constructor() { }

    async login(ctx) {
        const {
            account = '',
            password = ''
        } = ctx.request.body
        const params = {
            account,
            password
        }
        const result = await sendLogin(params, usersTable)
        if (result.code === 200) {
            result.data.token = jsonwebtoken.sign({
                _id: 'brian'
            }, config.JWT_SECRET, {
                expiresIn: '2h'
            })
        }
        ctx.body = result
    }

}

export default new loginController()