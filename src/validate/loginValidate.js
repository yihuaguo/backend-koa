import Validate from 'request-validate'
import filiter from "../utils/filiter"

export const testValidate = (params) => {
    const rules = {
        'name': 'required|min:1|',
        'age': 'required|min:1|max:18'
    }
    const message = {
        'name.required': 'name 是必须的',
        'age.required': "age 是必须的"
    }
    Validate(params, rules, message)
}

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
    testValidate,
    loginValidate
}