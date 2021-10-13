import {
    sendQuery,
    sendInsert,
    sendDetail,
    sendDelete,
    sendEdit
} from "../config/MysqlHelper"
import {
    v4 as uuidv4
} from 'uuid';
import config from '../config/index'

const {
    messageTable
} = config.TABLENAMELIST

class messageController {
    constructor() { }

    // 资讯列表
    async getMessageList(ctx) {
        const {
            current,
            pageSize,
            ...otherParams
        } = ctx.request.query
        const params = {
            current,
            pageSize,
            ...otherParams
        }
        const result = await sendQuery(params, messageTable)
        ctx.body = result
    }

    // 资讯新增
    async addMessage(ctx) {
        const params = {
            id: uuidv4(),
            create_time: new Date().getTime(),
            ...ctx.request.body
        }
        const result = await sendInsert(params, messageTable)
        ctx.body = {
            code: result.affectedRows === 1 ? 200 : 500
        }
    }

    // 资讯删除
    async deleteMessage(ctx) {
        const {
            id
        } = ctx.request.query
        const result = await sendDelete(id, messageTable)
        ctx.body = result
    }

    // 资讯详情
    async getMessageDetail(ctx) {
        const {
            id
        } = ctx.request.query
        const result = await sendDetail(id, messageTable)
        ctx.body = result
    }

    // 资讯编辑
    async editMessage(ctx) {
        const params = {
            ...ctx.request.body
        }
        const result = await sendEdit(params, messageTable)
        ctx.body = {
            code: result.affectedRows === 1 ? 200 : 500
        }
    }

}

export default new messageController()
