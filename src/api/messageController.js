import {
    getMessageListValidate,
    getMessageDetailValidate,
    addMessageValidate,
    deleteMessageValidate,
    editMessageValidate
} from '../validate/messageValidate'

import {
    getMessageListModal,
    getMessageDetailModal,
    addMessageModal,
    deleteMessageModal,
    editMessageModal
} from '../modal/messageModal'

class messageController {
    constructor() { }

    // 资讯列表
    async getMessageList(ctx) {
        const params = ctx.request.query
        const filiterParams = getMessageListValidate(params)
        const result = await getMessageListModal(filiterParams)
        ctx.body = result
    }

    // 资讯新增
    async addMessage(ctx) {
        const params = ctx.request.body
        const filiterParams = addMessageValidate(params)
        const result = await addMessageModal(filiterParams)
        ctx.body = result
    }

    // 资讯删除
    async deleteMessage(ctx) {
        const params = ctx.request.query
        const filiterParams = deleteMessageValidate(params)
        const result = await deleteMessageModal(filiterParams)
        ctx.body = result
    }

    // 资讯详情
    async getMessageDetail(ctx) {
        const params = ctx.request.query
        const filiterParams = getMessageDetailValidate(params)
        const result = await getMessageDetailModal(filiterParams)
        ctx.body = result
    }

    // 资讯编辑
    async editMessage(ctx) {
        const params = ctx.request.body
        const filiterParams = editMessageValidate(params)
        const result = await editMessageModal(filiterParams)
        ctx.body = result
    }
}

export default new messageController()
