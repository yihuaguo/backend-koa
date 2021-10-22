import Validate from 'request-validate'
import { filiter } from "../utils/filiter"

// 编辑配置校验
export const editConfigValidate = (params = {}) => {
    const editConfigFiliterList = ['companyHtml', 'kfWxCodeImgUrl', 'gzhWxCodeImgUrl', 'kfPhone']
    const rules = {
        'companyHtml': 'required',
        'kfWxCodeImgUrl': 'required',
        'gzhWxCodeImgUrl': 'required',
        'kfPhone': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
        'companyHtml.required': '未检测到 官网介绍',
        'kfWxCodeImgUrl.required': '未检测到 客服微信图片',
        'gzhWxCodeImgUrl.required': '未检测到 公众号微信图片',
        'kfPhone.required': '未检测到 客服电话'
    }
    Validate(params, rules, message)
    return filiter(params, editConfigFiliterList)
}

export default {
    editConfigValidate
}