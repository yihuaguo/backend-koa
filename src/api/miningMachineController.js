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
    miningmachineTable
} = config.TABLENAMELIST

class miningMachineController {
    constructor() { }

    // 矿机列表
    async getMiningMachineList(ctx) {
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
        const result = await sendQuery(params, miningmachineTable)
        ctx.body = result
    }

    // 矿机新增
    async addMiningMachine(ctx) {
        const params = {
            id: uuidv4(),
            create_time: new Date().getTime(),
            ...ctx.request.body
        }
        const result = await sendInsert(params, miningmachineTable)
        ctx.body = {
            code: result.affectedRows === 1 ? 200 : 500
        }
    }

    // 矿机删除
    async deleteMiningMachine(ctx) {
        const {
            id
        } = ctx.request.query
        const result = await sendDelete(id, miningmachineTable)
        ctx.body = result
    }

    // 矿机详情
    async getMiningMachineDetail(ctx) {
        const {
            id
        } = ctx.request.query
        const result = await sendDetail(id, miningmachineTable)
        ctx.body = result
    }

    // 编辑系列
    async editMiningMachine(ctx) {
        const params = {
            ...ctx.request.body
        }
        const result = await sendEdit(params, miningmachineTable)
        ctx.body = {
            code: result.affectedRows === 1 ? 200 : 500
        }
    }

}

export default new miningMachineController()
