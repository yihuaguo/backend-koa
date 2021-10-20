// 空格或者空字符串
const isNull = (str) => {
    if (str == "") return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
}

// 去除脏数据参数
export const filiter = (params, ruler) => {
    const filiterParams = {}
    ruler.map(item => {
        if (params[item] === undefined || params[item] === null || isNull(params[item])) return
        filiterParams[item] = params[item]
    })
    return filiterParams
}

// 比较AB两数组去除A中B重复的部分，返回A
export const removeRepeat = (origin = [], filiter = []) => {
    const temp = []
    const temparray = []
    for (let i = 0; i < filiter.length; i++) {
        temp[filiter[i]] = true
    }
    for (let i = 0; i < origin.length; i++) {
        if (!temp[origin[i]]) {
            temparray.push(origin[i])
        }
    }
    return temparray
}

export default {
    filiter,
    removeRepeat
}