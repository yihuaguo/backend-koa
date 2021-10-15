import mysql from 'mysql'
import config from '../config/index'

// 建立连接
const __connection = () => {
    var connection = mysql.createConnection(config.MYSQLCONFIG);
    connection.connect();
    return connection;
};

// 通用执行sql
const sendSql = (sql) => {
    console.log('time：', new Date())
    console.log('sql：', sql)
    // 获取数据库链接对象
    const connection = __connection();
    return new Promise((resovle, reject) => {
        // 执行SQL语句
        connection.query(sql, async (error, results) => {
            if (error) reject(error)
            resovle(results)
        });
        // 关闭链接
        connection.end();
    })
}

export default sendSql