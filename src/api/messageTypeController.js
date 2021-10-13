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
import {
    requireCheck
} from "../utils/requireCheck";

const {
    messageTypeTable
} = config.TABLENAMELIST

class messageTypeController {
    constructor() { }

    // 系列列表
    async getMessageTypeList(ctx) {
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
        const result = await sendQuery(params, messageTypeTable)
        ctx.body = result
    }

    // 系列详情
    async getMessageTypeDetail(ctx) {
        const {
            id
        } = ctx.request.query
        const result = await sendDetail(id, messageTypeTable)
        ctx.body = result
    }

    // 新增系列
    async addMessageType(ctx) {
        if (!requireCheck(ctx.request.body, ['typeName'])) {
            ctx.body = {
                code: 400,
                data: '传参错误!'
            }
            return
        }
        const {
            typeName
        } = ctx.request.body
        const params = {
            id: uuidv4(),
            typeName,
            createTime: new Date().getTime()
        }
        const result = await sendInsert(params, messageTypeTable)
        ctx.body = {
            code: result.affectedRows === 1 ? 200 : 500
        }
    }

    // 删除系列
    async deleteMessageType(ctx) {
        const {
            id
        } = ctx.request.query
        const result = await sendDelete(id, messageTypeTable)
        ctx.body = result
    }

    // 编辑系列
    async editMessageType(ctx) {
        const {
            id,
            typeName
        } = ctx.request.body
        const params = {
            id,
            typeName
        }
        const result = await sendEdit(params, messageTypeTable)
        ctx.body = {
            code: result.affectedRows === 1 ? 200 : 500
        }
    }
}

export default new messageTypeController()