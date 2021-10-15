import {
    getHelpListValidate,
    getHelpDetailValidate,
    addHelpValidate,
    deleteHelpValidate,
    editHelpValidate
} from '../validate/HelpValidate'

import {
    getHelpListModal,
    getHelpDetailModal,
    addHelpModal,
    deleteHelpModal,
    editHelpModal
} from '../modal/HelpModal'

class HelpController {
    constructor() { }

    // 资讯列表
    async getHelpList(ctx) {
        const params = ctx.request.query
        const filiterParams = getHelpListValidate(params)
        const result = await getHelpListModal(filiterParams)
        ctx.body = result
    }

    // 资讯新增
    async addHelp(ctx) {
        const params = ctx.request.body
        const filiterParams = addHelpValidate(params)
        const result = await addHelpModal(filiterParams)
        ctx.body = result
    }

    // 资讯删除
    async deleteHelp(ctx) {
        const params = ctx.request.query
        const filiterParams = deleteHelpValidate(params)
        const result = await deleteHelpModal(filiterParams)
        ctx.body = result
    }

    // 资讯详情
    async getHelpDetail(ctx) {
        const params = ctx.request.query
        const filiterParams = getHelpDetailValidate(params)
        const result = await getHelpDetailModal(filiterParams)
        ctx.body = result
    }

    // 资讯编辑
    async editHelp(ctx) {
        const params = ctx.request.body
        const filiterParams = editHelpValidate(params)
        const result = await editHelpModal(filiterParams)
        ctx.body = result
    }
}

export default new HelpController()
