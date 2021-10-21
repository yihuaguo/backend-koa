import {
    getConfigValidate,
    editConfigValidate,
} from '../validate/configValidate'

import {
    getConfigModal,
    editConfigModal,
} from '../modal/configModal'

class ConfigController {
    constructor() { }

    // 获取配置
    async getConfig(ctx) {
        const params = ctx.request.query
        const filiterParams = getConfigValidate(params)
        const result = await getConfigModal(filiterParams)
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
