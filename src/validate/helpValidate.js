import Validate from 'request-validate'
import filiter from "../utils/filiter"

// 资讯列表校验
export const getHelpListValidate = (params = {}) => {
    const getHelpListFiliterList = ['current', 'pageSize', 'typeId']
    const rules = {
        'current': 'required',
        'pageSize': 'required'
    }
    const message = {
        'current.required': '未检测到 current',
        'pageSize.required': "未检测到 pageSize"
    }
    Validate(params, rules, message)
    return filiter(params, getHelpListFiliterList)
}

// 资讯详情校验
export const getHelpDetailValidate = (params = {}) => {
    const getHelpDetailFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, getHelpDetailFiliterList)
}

// 资讯新增校验
export const addHelpValidate = (params = {}) => {
    const addHelpFiliterList = ['title', 'typeId', 'htmlDocument']
    const rules = {
        'title': 'required',
        'htmlDocument': 'required',
        'typeId': 'required',
    }
    const message = {
        'title.required': '未检测到 title',
        'htmlDocument.required': '未检测到 htmlDocument',
        'typeId.required': '未检测到 typeId',
    }
    Validate(params, rules, message)
    return filiter(params, addHelpFiliterList)
}

// 资讯删除校验
export const deleteHelpValidate = (params = {}) => {
    const deleteHelpFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, deleteHelpFiliterList)
}

// 资讯编辑校验
export const editHelpValidate = (params = {}) => {
    const editHelpFiliterList = ['id', 'title', 'typeId', 'htmlDocument']
    const rules = {
        'id': 'required',
        'title': 'required',
        'htmlDocument': 'required',
        'typeId': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
        'title.required': '未检测到 title',
        'htmlDocument.required': '未检测到 htmlDocument',
        'typeId.required': '未检测到 typeId',
    }
    Validate(params, rules, message)
    return filiter(params, editHelpFiliterList)
}

export default {
    getHelpListValidate,
    getHelpDetailValidate,
    addHelpValidate,
    deleteHelpValidate,
    editHelpValidate
}