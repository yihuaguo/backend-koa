import config from '../config/index'
import { where, limit, insert, update } from '../utils/splicSql'
import sendSql from '../utils/mysqlConnect'
import { v4 as uuidv4 } from 'uuid';
const helpTypeTable = config.TABLENAMELIST.helpTypeTable
const helpTable = config.TABLENAMELIST.helpTable

// 帮助分类列表sql
export const getHelpTypeListModal = async (params = {}) => {
    console.log('getHelpTypeListModal', getHelpTypeListModal)
    const { current, pageSize, ...otherParams } = params
    const countSql = `select count(*) from ${helpTypeTable} ${where(otherParams)}`
    const sql = `select * from ${helpTypeTable} ${where(otherParams)} ${limit(current, pageSize)}`
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

// 帮助分类详情sql
export const getHelpTypeDetailModal = async (params = {}) => {
    const sql = `select * from ${helpTypeTable} ${where(params)}`
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

// 帮助分类新增sql
export const addHelpTypeModal = async (params = {}) => {
    const filiterParams = {
        id: uuidv4(),
        create_time: new Date().getTime(),
        ...params
    }
    const sql = `insert into ${helpTypeTable} ${insert(filiterParams)}`
    return sendSql(sql).then(() => {
        return { code: 200 }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 帮助分类删除sql
export const deleteHelpTypeModal = async (params = {}) => {
    const checkSql = `select id from ${helpTable} ${where({ typeId: params.id })}`
    const helpList = await sendSql(checkSql)
    if (helpList.length > 0) return { code: 500, msg: '该分类节点下有文章分支，请将全部文章删除后后再删除该分类节点！' }
    const sql = `delete from ${helpTypeTable} ${where(params)}`
    return sendSql(sql).then(() => {
        return { code: 200 }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 帮助分类编辑sql
export const editHelpTypeModal = async (params = {}) => {
    const { id, ...otherParams } = params
    const sql = `update ${helpTypeTable} ${update(otherParams)} ${where({ id })}`
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
    getHelpTypeListModal,
    getHelpTypeDetailModal,
    addHelpTypeModal,
    deleteHelpTypeModal,
    editHelpTypeModal
}