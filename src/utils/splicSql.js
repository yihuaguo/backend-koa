// where 条件sql拼接
// {id: 'xxx', name: 'xxxx'} => id='xxx' and name='xxxx'
export const where = (params = {}) => {
    let whereSql = ''
    const dataArr = Object.entries(params)
    if (dataArr.length === 0) {
        return whereSql
    } else {
        whereSql = "where"
        dataArr.map((item, index) => {
            whereSql += ` ${item[0]}='${item[1]}' ${dataArr[index + 1] ? 'and' : ''}`
        })
        return whereSql
    }
}

// update 编辑sql拼接
// {id: 'xxx', name: 'xxxx'} => id='xxx',name='xxxx'
export const update = (params = {}) => {
    let updateSql = ''
    const dataArr = Object.entries(params)
    if (dataArr.length === 0) {
        return updateSql
    } else {
        updateSql = "SET"
        dataArr.map((item, index) => {
            updateSql += ` ${item[0]}='${item[1]}'${dataArr[index + 1] ? ',' : ''}`
        })
        return updateSql
    }
}

// limit 分页sql拼接
// {current: 2, pageSize: 20} => limit 20 40
export const limit = (current, pageSize) => {
    if (current > 0 && pageSize > 0) {
        return `limit ${(current - 1) * pageSize}, ${pageSize * current}`
    } else {
        return ''
    }
}

// insert 新增sql拼接
// {id: 'xxx', name: 'xxxx'} => (id, name) values ('xxx', 'xxxx')
export const insert = (params = {}) => {
    let valuesStr = ''
    const keys = Object.keys(params).join()
    const values = Object.values(params)
    values.map((item, index) => {
        valuesStr += `'${item}'${values[index + 1] ? ',' : ''}`
    })
    return `(${keys}) ${keys.length > 0 ? 'values' : ''} (${valuesStr})`
}

// screen 筛选sql拼接
// ['name', 'age'] => 'name,age'
export const screen = (screenField = []) => {
    let screenStr = ''
    if (screenField.length === 0) return ''
    screenField.map((item, index) => {
        screenStr += `${item}${screenField[index + 1] ? ',' : ''}`
    })
    return screenStr
}

// order by 排序sql拼接
// create_time => order by create_time desc
export const orderBy = (orderStr) => {
    return `order by ${orderStr} desc`
}

export default {
    where,
    limit,
    insert,
    update,
    orderBy,
    screen
}