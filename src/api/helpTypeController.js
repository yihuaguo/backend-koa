import {
    getHelpTypeListValidate,
    getHelpTypeDetailValidate,
    addHelpTypeValidate,
    deleteHelpTypeValidate,
    editHelpTypeValidate
} from '../validate/helpTypeValidate'

import {
    getHelpTypeListModal,
    getHelpTypeDetailModal,
    addHelpTypeModal,
    deleteHelpTypeModal,
    editHelpTypeModal
} from '../modal/helpTypeModal'

class HelpTypeController {
    constructor() { }

    // 帮助列表
    async getHelpTypeList(ctx) {
        const params = ctx.request.query
        const filiterParams = getHelpTypeListValidate(params)
        const result = await getHelpTypeListModal(filiterParams)
        ctx.body = result
    }

    // 帮助详情
    async getHelpTypeDetail(ctx) {
        const params = ctx.request.query
        const filiterParams = getHelpTypeDetailValidate(params)
        const result = await getHelpTypeDetailModal(filiterParams)
        ctx.body = result
    }

    // 新增帮助
    async addHelpType(ctx) {
        const params = ctx.request.body
        const filiterParams = addHelpTypeValidate(params)
        const result = await addHelpTypeModal(filiterParams)
        ctx.body = result
    }

    // 删除帮助
    async deleteHelpType(ctx) {
        const params = ctx.request.query
        const filiterParams = deleteHelpTypeValidate(params)
        const result = await deleteHelpTypeModal(filiterParams)
        ctx.body = result
    }

    // 编辑帮助
    async editHelpType(ctx) {
        const params = ctx.request.body
        const filiterParams = editHelpTypeValidate(params)
        const result = await editHelpTypeModal(filiterParams)
        ctx.body = result
    }
}

export default new HelpTypeController()