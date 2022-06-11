// jwt
const JWT_SECRET = '^IYg8u!BkIxVWV7a8ZZUF$K27*DhLZvVIGx9ax5w4aL5g$XT7Ry!f%m&qxIUxp'

// 数据库表名
const TABLENAMELIST = {
    miningmachineTable: 'miningmachine',
    messageTable: 'message',
    messageTypeTable: 'messagetype',
    helpTypeTable: 'helptype',
    recruitTable: 'recruit',
    helpTable: 'help',
    configTable: 'config',
    usersTable: 'users'
}

// 数据库配置
const MYSQLCONFIG = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'wantpools'
}

// 本地开发和线上服务器不同配置项
const SERVERSCONFIG = {
    localhost: {
        uploadUrl: 'http://xx.xxx.xx.xx:3000',
        port: 3000,
    },
    server: {
        uploadUrl: 'http://xx.xxx.xxx.xxx:9528',
        port: 9528,
    }
}

// 每次上线修改（唯一）-----------------------------------
const isDev = false

export default {
    JWT_SECRET,
    TABLENAMELIST,
    SERVERSCONFIG,
    MYSQLCONFIG,
    isDev
}