// 分页查询
export const querySql = (parmas, tableName) => {
    const {
        current = 1,
        pageSize = 999,
        ...otherParams
    } = parmas
    const otherParamsList = Object.entries(otherParams)
    let otherParamsSql = ''



    otherParamsList.map(item => {
        const value = item[1].trim()
        if (Boolean(value.match(/^[ ]*$/))) return
        otherParamsSql += `${item[0]}=${item[1]} and `
    })
    const whereSql = otherParamsList.length > 0 ? otherParamsSql ? `where ${otherParamsSql.slice(0, -4)}` : '' : ''
    const querySql = `select * from ${tableName} ${whereSql ? whereSql : ''}limit ${(current - 1) * pageSize}, ${pageSize};`
    return querySql
}

// 新增
export const insertSql = (parmas, tableName) => {
    const sqlKeys = Object.keys(parmas).join()
    const values = Object.values(parmas)
    let sqlValues = ""
    values.map(item => {
        sqlValues += `'${item}',`
    })
    const insertSql = `insert into ${tableName} (${sqlKeys}) values (${sqlValues.slice(0, -1)})`
    return insertSql
}

// 获取详情
export const detailSql = (id, tableName) => {
    const insertSql = `select * from ${tableName} where id='${id}'`
    return insertSql
}

// 删除
export const deleteSql = (id, tableName) => {
    const insertSql = `delete from ${tableName} where id='${id}'`
    return insertSql
}

// 编辑
export const editSql = (params, tableName) => {
    const parmasList = Object.entries(params)
    let editParamsSql = ''
    parmasList.map(item => {
        editParamsSql += `${item[0]}="${item[1]}",`
    })
    const editSql = `UPDATE ${tableName} SET ${editParamsSql.slice(0, -1)} WHERE id="${params.id}"`
    return editSql
}

// 账号查询
export const accountSql = (account, tableName) => {
    const userSql = `select * from ${tableName} where account='${account}'`
    return userSql
}

export default {
    insertSql,
    detailSql,
    deleteSql,
    editSql,
    querySql,
    accountSql
}