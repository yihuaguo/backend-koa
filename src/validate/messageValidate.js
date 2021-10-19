import Validate from 'request-validate'
import filiter from "../utils/filiter"

// 资讯列表校验
export const getMessageListValidate = (params = {}) => {
    const getMessageListFiliterList = ['current', 'pageSize', 'typeId']
    const rules = {
        'current': 'required',
        'pageSize': 'required'
    }
    const message = {
        'current.required': '未检测到 current',
        'pageSize.required': "未检测到 pageSize"
    }
    Validate(params, rules, message)
    return filiter(params, getMessageListFiliterList)
}

// 资讯详情校验
export const getMessageDetailValidate = (params = {}) => {
    const getMessageDetailFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, getMessageDetailFiliterList)
}

// 资讯新增校验
export const addMessageValidate = (params = {}) => {
    const addMessageFiliterList = ['title', 'state', 'typeId', 'imgUrl', 'htmlDocument']
    const rules = {
        'title': 'required',
        'state': 'required',
        'typeId': 'required',
    }
    const message = {
        'title.required': '未检测到 title',
        'state.required': '未检测到 state',
        'typeId.required': '未检测到 typeId',
    }
    Validate(params, rules, message)
    return filiter(params, addMessageFiliterList)
}

// 资讯删除校验
export const deleteMessageValidate = (params = {}) => {
    const deleteMessageFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, deleteMessageFiliterList)
}

// 资讯编辑校验
export const editMessageValidate = (params = {}) => {
    const editMessageFiliterList = ['id', 'title', 'state', 'typeId', 'imgUrl', 'htmlDocument']
    const rules = {
        'id': 'required',
        'title': 'required',
        'state': 'required',
        'typeId': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
        'title.required': '未检测到 title',
        'state.required': '未检测到 state',
        'typeId.required': '未检测到 typeId',
    }
    Validate(params, rules, message)
    return filiter(params, editMessageFiliterList)
}

export default {
    getMessageListValidate,
    getMessageDetailValidate,
    addMessageValidate,
    deleteMessageValidate,
    editMessageValidate
}