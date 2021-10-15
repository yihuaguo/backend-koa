import {
    getMessageTypeListValidate,
    getMessageTypeDetailValidate,
    addMessageTypeValidate,
    deleteMessageTypeValidate,
    editMessageTypeValidate
} from '../validate/messageTypeValidate'

import {
    getMessageTypeListModal,
    getMessageTypeDetailModal,
    addMessageTypeModal,
    deleteMessageTypeModal,
    editMessageTypeModal
} from '../modal/messageTypeModal'

class messageTypeController {
    constructor() { }

    // 系列列表
    async getMessageTypeList(ctx) {
        const params = ctx.request.query
        const filiterParams = getMessageTypeListValidate(params)
        const result = await getMessageTypeListModal(filiterParams)
        ctx.body = result
    }

    // 系列详情
    async getMessageTypeDetail(ctx) {
        const params = ctx.request.query
        const filiterParams = getMessageTypeDetailValidate(params)
        const result = await getMessageTypeDetailModal(filiterParams)
        ctx.body = result
    }

    // 新增系列
    async addMessageType(ctx) {
        const params = ctx.request.body
        const filiterParams = addMessageTypeValidate(params)
        const result = await addMessageTypeModal(filiterParams)
        ctx.body = result
    }

    // 删除系列
    async deleteMessageType(ctx) {
        const params = ctx.request.query
        const filiterParams = deleteMessageTypeValidate(params)
        const result = await deleteMessageTypeModal(filiterParams)
        ctx.body = result
    }

    // 编辑系列
    async editMessageType(ctx) {
        const params = ctx.request.body
        const filiterParams = editMessageTypeValidate(params)
        const result = await editMessageTypeModal(filiterParams)
        ctx.body = result
    }
}

export default new messageTypeController()