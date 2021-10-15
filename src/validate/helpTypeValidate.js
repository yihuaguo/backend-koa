import Validate from 'request-validate'
import filiter from "../utils/filiter"

// 帮助分类列表校验
export const getHelpTypeListValidate = (params = {}) => {
    const getHelpTypeListFiliterList = ['current', 'pageSize', 'name']
    const rules = {
        'current': 'required',
        'pageSize': 'required'
    }
    const message = {
        'current.required': '未检测到 current',
        'pageSize.required': "未检测到 pageSize"
    }
    Validate(params, rules, message)
    return filiter(params, getHelpTypeListFiliterList)
}

// 帮助分类详情校验
export const getHelpTypeDetailValidate = (params = {}) => {
    const getHelpTypeDetailFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, getHelpTypeDetailFiliterList)
}

// 帮助分类新增校验
export const addHelpTypeValidate = (params = {}) => {
    const addHelpTypeValidateFiliterList = ['typeName']
    const rules = {
        'typeName': 'required',
    }
    const message = {
        'typeName.required': '未检测到 typeName',
    }
    Validate(params, rules, message)
    return filiter(params, addHelpTypeValidateFiliterList)
}

// 帮助分类删除校验
export const deleteHelpTypeValidate = (params = {}) => {
    const deleteHelpTypeFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, deleteHelpTypeFiliterList)
}

// 帮助分类编辑校验
export const editHelpTypeValidate = (params = {}) => {
    const editHelpTypeFiliterList = ['id', 'typeName']
    const rules = {
        'id': 'required',
        'typeName': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
        'typeName.required': '未检测到 typeName',
    }
    Validate(params, rules, message)
    return filiter(params, editHelpTypeFiliterList)
}

export default {
    getHelpTypeListValidate,
    getHelpTypeDetailValidate,
    addHelpTypeValidate,
    deleteHelpTypeValidate,
    editHelpTypeValidate
}