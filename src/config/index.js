// jwt
const JWT_SECRET = '^IYg8u!BkIxVWV7a8ZZUF$K27*DhLZvVIGx9ax5w4aL5g$XT7Ry!f%m&qxIUxp'

// tbaleName
const TABLENAMELIST = {
    miningmachineTable: 'miningmachine',
    miningmachineTypeTable: 'miningmachinetype',
    messageTable: 'message',
    messageTypeTable: 'messagetype',
    usersTable: 'users'
}

// 本地开发和线上服务器不同配置项
const SERVERSCONFIG = {
    localhost: {
        uploadUrl: 'http://192.168.50.19:3000'
    },
    server: {
        uploadUrl: 'http://47.243.196.159:9528'
    }
}

// 每次上线修改
const isDev = false

export default {
    JWT_SECRET,
    TABLENAMELIST,
    SERVERSCONFIG,
    isDev
}