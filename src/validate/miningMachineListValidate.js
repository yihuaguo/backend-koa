import Validate from 'request-validate'
import { filiter } from "../utils/filiter"

// 矿机列表校验
export const getMiningMachineListValidate = (params = {}) => {
    const getMiningMachineListFiliterList = ['current', 'pageSize', 'state']
    const rules = {
        'current': 'required',
        'pageSize': 'required'
    }
    const message = {
        'current.required': '未检测到 current',
        'pageSize.required': "未检测到 pageSize"
    }
    Validate(params, rules, message)
    return filiter(params, getMiningMachineListFiliterList)
}

// 矿机新增校验
export const addMiningMachineValidate = (params = {}) => {
    const addMiningMachineFiliterList = ['name', 'state', 'start', 'type', 'model', 'config', 'price', 'core',
        'hostPrice', 'skillPrice', 'description', 'htmlZjDocument', 'htmlGsDocument', 'htmlTgDocument', 'imgUrl', 'power'
    ]
    const rules = {
        'name': 'required',
        'model': 'required',
    }
    const message = {
        'name.required': '未检测到 矿机名',
        'model.required': "未检测到 型号",
    }
    Validate(params, rules, message)
    return filiter(params, addMiningMachineFiliterList)
}

// 矿机删除校验
export const deleteMiningMachineValidate = (params = {}) => {
    const deleteMiningMachineFiliterList = ['id']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, deleteMiningMachineFiliterList)
}

// 矿机详情校验
export const getMiningMachineDetailValidate = (params = {}) => {
    const getMiningMachineDetailFiliterList = ['id', 'filiter']
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, getMiningMachineDetailFiliterList)
}

// 矿机编辑校验
export const editMiningMachineValidate = (params = {}) => {
    const editMiningMachineFiliterList = ['id', 'name', 'start', 'type', 'state', 'model', 'config', 'price', 'core',
        'hostPrice', 'skillPrice', 'description', 'htmlZjDocument', 'htmlGsDocument', 'htmlTgDocument', 'imgUrl', 'power'
    ]
    const rules = {
        'id': 'required',
    }
    const message = {
        'id.required': '未检测到 id',
    }
    Validate(params, rules, message)
    return filiter(params, editMiningMachineFiliterList)
}

export default {
    getMiningMachineListValidate,
    addMiningMachineValidate,
    deleteMiningMachineValidate,
    getMiningMachineDetailValidate,
    editMiningMachineValidate
}