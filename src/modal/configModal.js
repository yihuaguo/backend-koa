import config from '../config/index'
import { where, update } from '../utils/splicSql'
import sendSql from '../utils/mysqlConnect'
const configTable = config.TABLENAMELIST.configTable

// 资讯分类详情sql
export const getConfigModal = (params = {}) => {
    const sql = `select * from ${configTable} ${where(params)}`
    return sendSql(sql).then(res => {
        return {
            code: 200,
            msg: res[0]
        }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 资讯分类编辑sql
export const editConfigModal = (params = {}) => {
    const { id, ...otherParams } = params
    const sql = `update ${configTable} ${update(otherParams)} ${where({ id })}`
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
    getConfigModal,
    editConfigModal
}