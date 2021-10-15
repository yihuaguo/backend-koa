import Validate from 'request-validate'
import filiter from "../utils/filiter"

// 矿机列表校验
export const getMiningMachineListValidate = (params = {}) => {
    const getMiningMachineListFiliterList = ['current', 'pageSize', 'name']
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
    const addMiningMachineFiliterList = ['name', 'state', 'model', 'config', 'price',
        'hostPrice', 'skillPrice', 'description', 'htmlDocument', 'imgUrl'
    ]
    const rules = {
        'name': 'required',
        'state': 'required'
    }
    const message = {
        'name.required': '未检测到 name',
        'state.required': "未检测到 state"
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
    const getMiningMachineDetailFiliterList = ['id']
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
    const editMiningMachineFiliterList = ['id', 'name', 'state', 'model', 'config', 'price',
        'hostPrice', 'skillPrice', 'description', 'htmlDocument', 'imgUrl'
    ]
    const rules = {
        'id': 'required',
        'name': 'required',
        'state': 'required'
    }
    const message = {
        'id.required': '未检测到 id',
        'name.required': '未检测到 name',
        'state.required': "未检测到 state"
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