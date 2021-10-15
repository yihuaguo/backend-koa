import Validate from 'request-validate'
import filiter from "../utils/filiter"

// 招聘列表校验
export const getRecruitListValidate = (params = {}) => {
    const getRecruitListFiliterList = ['current', 'pageSize', 'name']
    const rules = {
        'current': 'required',
        'pageSize': 'required'
    }
    const message = {
        'current.required': '未检测到 current',
        'pageSize.required': "未检测到 pageSize"
    }
    Validate(params, rules, message)
    return filiter(params, getRecruitListFiliterList)
}

// 招聘详情校验
export const getRecruitDetailValidate = (params = {}) => {
    const getRecruitDetailFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, getRecruitDetailFiliterList)
}

// 招聘新增校验
export const addRecruitValidate = (params = {}) => {
    const addRecruitFiliterList = ['postName', 'school', 'sum', 'experience', 'htmlDocument']
    const rules = {
        'postName': 'required',
    }
    const message = {
        'postName.required': '未检测到 postName',
    }
    Validate(params, rules, message)
    return filiter(params, addRecruitFiliterList)
}

// 招聘删除校验
export const deleteRecruitValidate = (params = {}) => {
    const deleteRecruitFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, deleteRecruitFiliterList)
}

// 招聘编辑校验
export const editRecruitValidate = (params = {}) => {
    const editRecruitFiliterList = ['id','postName', 'school', 'sum', 'experience', 'htmlDocument']
    const rules = {
        'id': 'required',
        'postName': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
        'postName.required': '未检测到 postName',
    }
    Validate(params, rules, message)
    return filiter(params, editRecruitFiliterList)
}

export default {
    getRecruitListValidate,
    getRecruitDetailValidate,
    addRecruitValidate,
    deleteRecruitValidate,
    editRecruitValidate
}