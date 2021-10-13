// mogodb
const DB_URL = 'mongodb://test:123456@192.168.50.19:27017/testdb'

// redis
const REDISCONFIG = {
    host: '192.168.50.19',
    port: '15001',
    password: '123456'
}

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

export default {
    DB_URL,
    REDISCONFIG,
    JWT_SECRET,
    TABLENAMELIST
}