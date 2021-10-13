export const htmlEncode = (str) => {
    console.log('str', str)
    let temp = ''
    if (str.length == 0) return ''
    temp = str.replace(/&/g, "&amp;");
    temp = str.replace(/&/g, "&amp;");
    temp = temp.replace(/</g, "&lt;");
    temp = temp.replace(/>/g, "&gt;");
    temp = temp.replace(/\s/g, "&nbsp;");
    temp = temp.replace(/\'/g, "&#39;");
    temp = temp.replace(/\"/g, "&quot;");
    console.log('temp', temp)
    return temp
}

export const htmlDecode = (str) => {
    let temp = ''
    if (str.length == 0) return "";
    temp = str.replace(/&amp;/g, "&");
    temp = temp.replace(/&lt;/g, "<");
    temp = temp.replace(/&gt;/g, ">");
    temp = temp.replace(/&nbsp;/g, " ");
    temp = temp.replace(/&#39;/g, "\'");
    temp = temp.replace(/&quot;/g, "\"");
    return temp
}