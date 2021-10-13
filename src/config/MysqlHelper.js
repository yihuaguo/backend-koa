import mysql from 'mysql'
import {
    insertSql,
    detailSql,
    deleteSql,
    editSql,
    querySql,
    accountSql
} from '../utils/dbSql'

// 建立链接
const __connection = () => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'wantpools'
    });
    connection.connect();
    return connection;
};

// 查询总条数
export const sendCount = function (tableName) {
    const sql = `select count(*) from ${tableName}`
    const connection = __connection();
    return new Promise(function (reject, resolve) {
        connection.query(sql, function (error, results) {
            if (error) throw error;
            reject(results);
        });
        connection.end();
    })
}

// 分页查询
export const sendQuery = (params = {}, tableName) => {
    const {
        current = 1, pageSize = 999
    } = params
    const sql = querySql(params, tableName)
    console.log('sendQuerySql', sql)
    // 获取数据库链接对象
    const connection = __connection();
    return new Promise(reject => {
        // 执行SQL语句
        connection.query(sql, async (error, results) => {
            if (error) throw error;
            const total = await sendCount(tableName)
            reject({
                code: 200,
                data: {
                    list: results || [],
                    current: Number(current),
                    pageSize: Number(pageSize),
                    total: Number(total[0]['count(*)'])
                }
            });
        });
        // 关闭链接
        connection.end();
    })
}

// 新增
export const sendInsert = (parmas = {}, tableName) => {
    const sql = insertSql(parmas, tableName)
    console.log('sql', sql)
    const connection = __connection();
    return new Promise(reject => {
        connection.query(sql, (error, results) => {
            if (error) throw error;
            reject(results);
        });
        connection.end();
    })
}

// 详情
export const sendDetail = (id, tableName) => {
    if (!id) return {
        code: 500,
        data: 'id未传入!'
    }
    const sql = detailSql(id, tableName)
    const connection = __connection();
    return new Promise(reject => {
        connection.query(sql, (error, results) => {
            if (error) throw error;
            reject({
                code: 200,
                data: results.length === 0 ? {} : results[0]
            });
        });
        connection.end();
    })
}

// 编辑
export const sendEdit = (params, tableName) => {
    const sql = editSql(params, tableName)
    // console.log('sql', sql)
    const connection = __connection();
    return new Promise(reject => {
        connection.query(sql, function (error, results) {
            if (error) throw error;
            reject(results);
        });
        connection.end();
    })
}

// 删除
export const sendDelete = function (id, tableName) {
    if (!id) return {
        code: 500,
        data: 'id未传入!'
    }
    const sql = deleteSql(id, tableName)
    var connection = __connection();
    return new Promise(reject => {
        connection.query(sql, (error, results) => {
            if (error) throw error;
            reject({
                code: 200
            });
        });
        connection.end();
    })
}

// 账号密码
export const sendLogin = (params = {}, tableName) => {
    const { account, password } = params
    if (!account || !password) return {
        code: 500,
        data: '账号或密码错误!'
    }
    const sql = accountSql(params.account, tableName)
    console.log('sql', sql)
    const connection = __connection();
    return new Promise(reject => {
        connection.query(sql, (error, results) => {
            if (error) throw error;
            console.log('results', results)
            if (results.length == 0) {
                reject({
                    code: 500,
                    data: '账号或密码错误!'
                })
            } else {
                if (results[0].password === password) {
                    reject({
                        code: 200,
                        data: {
                            id: results[0].id,
                            name: results[0].name
                        }
                    })
                } else {
                    reject({
                        code: 500,
                        data: '账号或密码错误!'
                    })
                }
            }
        });
        connection.end();
    })
}

export default {
    sendQuery,
    sendInsert,
    sendDetail,
    sendDelete,
    sendEdit
}