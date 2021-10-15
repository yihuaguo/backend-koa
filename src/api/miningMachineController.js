import {
    getMiningMachineListValidate,
    addMiningMachineValidate,
    deleteMiningMachineValidate,
    getMiningMachineDetailValidate,
    editMiningMachineValidate
} from '../validate/miningMachineListValidate'
import {
    getMiningMachineListModal,
    addMiningMachineModal,
    deleteMiningMachineModal,
    getMiningMachineDetailModal,
    editMiningMachineModal
} from "../modal/miningMachineListModal";

class miningMachineController {
    constructor() { }

    // 矿机列表
    async getMiningMachineList(ctx) {
        const params = ctx.request.query
        const filiterParams = getMiningMachineListValidate(params)
        const result = await getMiningMachineListModal(filiterParams)
        ctx.body = result
    }

    // 矿机新增
    async addMiningMachine(ctx) {
        const params = ctx.request.body
        let filiterParams = addMiningMachineValidate(params)
        const result = await addMiningMachineModal(filiterParams)
        ctx.body = result
    }

    // 矿机删除
    async deleteMiningMachine(ctx) {
        const params = ctx.request.query
        const filiterParams = deleteMiningMachineValidate(params)
        const result = await deleteMiningMachineModal(filiterParams)
        ctx.body = result
    }

    // 矿机详情
    async getMiningMachineDetail(ctx) {
        const params = ctx.request.query
        const filiterParams = getMiningMachineDetailValidate(params)
        const result = await getMiningMachineDetailModal(filiterParams)
        ctx.body = result
    }

    // 矿机编辑
    async editMiningMachine(ctx) {
        const params = ctx.request.body
        const filiterParams = editMiningMachineValidate(params)
        const result = await editMiningMachineModal(filiterParams)
        ctx.body = result
    }

}

export default new miningMachineController()
