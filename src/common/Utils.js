import { getValue } from '../config/RedisConfig'

const checkCode = async (key, value) => {
    const redisData = await getValue(key)
    // 这个用户没有过期且有数据
    if (redisData != null) {
        if (redisData.toLowerCase() === value.toLowerCase()) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

export {
    checkCode
}