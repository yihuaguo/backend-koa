import config from '../config/index'
import { where } from '../utils/splicSql'
import sendSql from '../utils/mysqlConnect'
import jsonwebtoken from 'jsonwebtoken'
const usersTable = config.TABLENAMELIST.usersTable

// 登录
export const loginModal = (params = {}) => {
    const sql = `select * from ${usersTable} ${where(params)}`
    return sendSql(sql).then(res => {
        return {
            code: 200,
            msg: {
                token: jsonwebtoken.sign({
                    _id: 'brian'
                }, config.JWT_SECRET, {
                    expiresIn: '2h'
                }),
                id: res[0].id,
                name: res[0].name
            }
        }
    }).catch(() => {
        return {
            code: 500,
            msg: '账号或密码错误'
        }
    })
}

export default {
    loginModal
}