// 空格或者空字符串
const isNull = (str) => {
    if (str == "") return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
}

// 去除脏数据参数
const filiter = (params, ruler) => {
    const filiterParams = {}
    ruler.map(item => {
        if (params[item] === undefined || params[item] === null || isNull(params[item])) return
        filiterParams[item] = params[item]
    })
    return filiterParams
}

export default filiter