import redis from 'redis'
import { promisifyAll } from 'bluebird'
import config from './index'

const options = {
    host: config.REDISCONFIG.host,
    port: config.REDISCONFIG.port,
    password: config.REDISCONFIG.password,
    detect_buffers: true,
    retry_strategy: function (options) {
        if (options.error && options.error.code === "ECONNREFUSED") {
            // End reconnecting on a specific error and flush all commands with
            // a individual error
            return new Error("The server refused the connection");
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
            // End reconnecting after a specific timeout and flush all commands
            // with a individual error
            return new Error("Retry time exhausted");
        }
        if (options.attempt > 10) {
            // End reconnecting with built in error
            return undefined;
        }
        // reconnect after
        return Math.min(options.attempt * 100, 3000);
    },
}

const client = promisifyAll(redis.createClient(options))

client.on('error', err => {
    console.log('redis connect error:' + err)
})

const setValue = (key, value, time) => {
    if (typeof value === "undefined" || value == null || value === '') {
        return
    }
    // 设置值为字符串或者对象
    if (typeof value === 'string') {
        // 如果有时间设置过期时间
        if (typeof time !== 'undefined') {
            client.set(key, value, 'EX', time)
        } else {
            client.set(key, value)
        }
    } else if (typeof value === 'object') {
        Object.keys(value).forEach(item => {
            client.hset(key, item, value[item], redis.print)
        })
    }
}

const getValue = (key) => {
    return client.getAsync(key)
}

const getHValue = (key) => {
    return client.hgetallAsync(key)
}

const delValue = (key) => {
    client.del(key, (err, res) => {
        if (res === 1) {
            console.log('delete successfully!')
        } else {
            console.log('delect error:' + err)
        }
    })
}

export {
    setValue,
    getValue,
    getHValue,
    delValue
}