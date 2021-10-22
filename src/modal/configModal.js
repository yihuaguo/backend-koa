import config from '../config/index'
import { update } from '../utils/splicSql'
import sendSql from '../utils/mysqlConnect'
const configTable = config.TABLENAMELIST.configTable

// 资讯分类详情sql
export const getConfigModal = async () => {
    const sql = `select * from ${configTable} where id='28f0def7-069a-4efe-b247-a654789ec215'`
    return sendSql(sql).then(res => {
        return {
            code: 200,
            msg: res[0] || {}
        }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 官网文章
export const getConfigOfWebSiteModal = async () => {
    const sql = `select companyHtml from ${configTable} where id='28f0def7-069a-4efe-b247-a654789ec215'`
    return sendSql(sql).then(res => {
        return {
            code: 200,
            msg: res[0] || {}
        }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 获取微信二维码图片和客服电话
export const getConfigOfImgAndPhoneModal = async () => {
    const sql = `select kfWxCodeImgUrl,gzhWxCodeImgUrl,kfPhone from ${configTable} where id='28f0def7-069a-4efe-b247-a654789ec215'`
    return sendSql(sql).then(res => {
        return {
            code: 200,
            msg: res[0] || {}
        }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

// 资讯分类编辑sql
export const editConfigModal = async (params = {}) => {
    const { id, ...otherParams } = params
    const sql = `update ${configTable} ${update(otherParams)} where id='28f0def7-069a-4efe-b247-a654789ec215'`
    return sendSql(sql).then(() => {
        return { code: 200 }
    }).catch(err => {
        return {
            code: 500,
            msg: err
        }
    })
}

export default {
    getConfigModal,
    getConfigOfWebSiteModal,
    getConfigOfImgAndPhoneModal,
    editConfigModal
}