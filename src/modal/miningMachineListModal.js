import config from '../config/index'
import { where, limit, insert, update, screen } from '../utils/splicSql'
import { getMiningMachineListField } from '../modalFieldFiliter/miningMachineField';
import sendSql from '../utils/mysqlConnect'
import { v4 as uuidv4 } from 'uuid';
const miningmachineTable = config.TABLENAMELIST.miningmachineTable

// 矿机列表sql
export const getMiningMachineListModal = (params = {}) => {
    const { current, pageSize, ...otherParams } = params
    const screenField = getMiningMachineListField(['htmlZjDocument', 'htmlGsDocument', 'htmlTgDocument'])
    const countSql = `select count(*) from ${miningmachineTable} ${where(otherParams)}`
    const sql = `select ${screen(screenField)} from ${miningmachineTable} ${where(otherParams)} ${limit(current, pageSize)}`
    return sendSql(sql).then(async (res) => {
        const count = await sendSql(countSql)
        return {
            code: 200,
            msg: {
                list: res,
                pageSize: Number(pageSize),
                current: Number(current),
                total: Number(count[0]['count(*)'])
            }
        }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 矿机推荐
export const getRecommendMiningMachineModal = () => {
    const screenField = getMiningMachineListField(['htmlZjDocument', 'htmlGsDocument', 'htmlTgDocument'])
    const sql = `select ${screen(screenField)} from ${miningmachineTable} where start='1'`
    return sendSql(sql).then(async (res) => {
        return {
            code: 200,
            msg: res[0] || {}
        }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 是否存在首页推荐矿机了
export const isRecommendMiningMachineModal = () => {
    const sql = `select id from ${miningmachineTable} where start='1'`
    return sendSql(sql).then(async (res) => {
        return {
            code: 200,
            msg: res.length > 0 ? true : false
        }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 矿机新增sql
export const addMiningMachineModal = (params = {}) => {
    const filiterParams = {
        id: uuidv4(),
        create_time: new Date().getTime(),
        ...params
    }
    const sql = `insert into ${miningmachineTable} ${insert(filiterParams)}`
    return sendSql(sql).then(() => {
        return { code: 200 }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 矿机删除sql
export const deleteMiningMachineModal = (params = {}) => {
    const sql = `delete from ${miningmachineTable} ${where(params)}`
    return sendSql(sql).then(() => {
        return { code: 200 }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 矿机详情sql
export const getMiningMachineDetailModal = (params = {}) => {
    const { id, filiter = '' } = params
    let filiterSql = ''
    if (filiter === 'base') {
        filiterSql = `${filiter ? screen(getMiningMachineListField(['htmlZjDocument', 'htmlGsDocument', 'htmlTgDocument'])) : ''}`
    } else if (filiter === 'htmlZjDocument') {
        filiterSql = 'htmlZjDocument'
    } else if (filiter === 'htmlGsDocument') {
        filiterSql = 'htmlGsDocument'
    } else if (filiter === 'htmlTgDocument') {
        filiterSql = 'htmlTgDocument'
    } else {
        filiterSql = '*'
    }
    const sql = `select ${filiterSql} from ${miningmachineTable} ${where({ id })}`
    console.log('sql', sql)
    return sendSql(sql).then(res => {
        return {
            code: 200,
            msg: res[0] || {}
        }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 矿机编辑sql
export const editMiningMachineModal = (params = {}) => {
    const { id, ...otherParams } = params
    const sql = `update ${miningmachineTable} ${update(otherParams)} ${where({ id })}`
    return sendSql(sql).then(() => {
        return { code: 200 }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

export default {
    getMiningMachineListModal,
    getRecommendMiningMachineModal,
    isRecommendMiningMachineModal,
    addMiningMachineModal,
    deleteMiningMachineModal,
    getMiningMachineDetailModal,
    editMiningMachineModal
}