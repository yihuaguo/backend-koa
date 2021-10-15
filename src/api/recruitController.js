import {
    getRecruitListValidate,
    getRecruitDetailValidate,
    addRecruitValidate,
    deleteRecruitValidate,
    editRecruitValidate
} from '../validate/RecruitValidate'

import {
    getRecruitListModal,
    getRecruitDetailModal,
    addRecruitModal,
    deleteRecruitModal,
    editRecruitModal
} from '../modal/RecruitModal'

class RecruitController {
    constructor() { }

    // 招聘列表
    async getRecruitList(ctx) {
        const params = ctx.request.query
        const filiterParams = getRecruitListValidate(params)
        const result = await getRecruitListModal(filiterParams)
        ctx.body = result
    }

    // 招聘新增
    async addRecruit(ctx) {
        const params = ctx.request.body
        const filiterParams = addRecruitValidate(params)
        const result = await addRecruitModal(filiterParams)
        ctx.body = result
    }

    // 招聘删除
    async deleteRecruit(ctx) {
        const params = ctx.request.query
        const filiterParams = deleteRecruitValidate(params)
        const result = await deleteRecruitModal(filiterParams)
        ctx.body = result
    }

    // 招聘详情
    async getRecruitDetail(ctx) {
        const params = ctx.request.query
        const filiterParams = getRecruitDetailValidate(params)
        const result = await getRecruitDetailModal(filiterParams)
        ctx.body = result
    }

    // 招聘编辑
    async editRecruit(ctx) {
        const params = ctx.request.body
        const filiterParams = editRecruitValidate(params)
        const result = await editRecruitModal(filiterParams)
        ctx.body = result
    }
}

export default new RecruitController()
