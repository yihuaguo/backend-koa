import Validate from 'request-validate'
import filiter from "../utils/filiter"

// 资讯分类列表校验
export const getMessageTypeListValidate = (params = {}) => {
    const getMessageTypeListFiliterList = ['current', 'pageSize', 'name']
    const rules = {
        'current': 'required',
        'pageSize': 'required'
    }
    const message = {
        'current.required': '未检测到 current',
        'pageSize.required': "未检测到 pageSize"
    }
    Validate(params, rules, message)
    return filiter(params, getMessageTypeListFiliterList)
}

// 资讯分类详情校验
export const getMessageTypeDetailValidate = (params = {}) => {
    const getMessageTypeDetailFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, getMessageTypeDetailFiliterList)
}

// 资讯分类新增校验
export const addMessageTypeValidate = (params = {}) => {
    const addMessageTypeValidateFiliterList = ['typeName']
    const rules = {
        'typeName': 'required',
    }
    const message = {
        'typeName.required': '未检测到 typeName',
    }
    Validate(params, rules, message)
    return filiter(params, addMessageTypeValidateFiliterList)
}

// 资讯分类删除校验
export const deleteMessageTypeValidate = (params = {}) => {
    const deleteMessageTypeFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, deleteMessageTypeFiliterList)
}

// 资讯分类编辑校验
export const editMessageTypeValidate = (params = {}) => {
    const editMessageTypeFiliterList = ['id', 'typeName']
    const rules = {
        'id': 'required',
        'typeName': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
        'typeName.required': '未检测到 typeName',
    }
    Validate(params, rules, message)
    return filiter(params, editMessageTypeFiliterList)
}

export default {
    getMessageTypeListValidate,
    getMessageTypeDetailValidate,
    addMessageTypeValidate,
    deleteMessageTypeValidate,
    editMessageTypeValidate
}