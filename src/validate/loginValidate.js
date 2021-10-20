import Validate from 'request-validate'
import { filiter } from "../utils/filiter"

export const loginValidate = (params = {}) => {
    // 需要接受的全部参数
    const loginFiliterList = ['account', 'password']
    // 参数过滤
    const rules = {
        'account': 'required',
        'password': 'required'
    }
    // 校验错误信息
    const message = {
        'account.required': '未检测到帐号',
        'password.required': "未检测到密码"
    }
    Validate(params, rules, message)
    return filiter(params, loginFiliterList)
}

export default {
    loginValidate
}