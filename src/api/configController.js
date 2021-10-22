import {
    editConfigValidate,
} from '../validate/configValidate'

import {
    getConfigModal,
    getConfigOfWebSiteModal,
    getConfigOfImgAndPhoneModal,
    editConfigModal,
} from '../modal/configModal'

class ConfigController {
    constructor() { }

    // 获取配置
    async getConfig(ctx) {
        const result = await getConfigModal()
        ctx.body = result
    }

    // 获取官网文章内容
    async getConfigOfWebSite(ctx) {
        const result = await getConfigOfWebSiteModal()
        ctx.body = result
    }

    // 获取微信二维码图片和客服电话
    async getConfigOfImgAndPhone(ctx) {
        const result = await getConfigOfImgAndPhoneModal()
        ctx.body = result
    }

    // 编辑配置
    async editConfig(ctx) {
        const params = ctx.request.body
        const filiterParams = editConfigValidate(params)
        const result = await editConfigModal(filiterParams)
        ctx.body = result
    }
}

export default new ConfigController()
