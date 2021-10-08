import svgCaptcha from 'svg-captcha'
import { setValue, getValue } from '../config/RedisConfig'
import moment from 'moment';

const genList = (current, pageSize) => {
    const tableListDataSource = [];
    for (let i = 0; i < pageSize; i += 1) {
        const index = (current - 1) * 10 + i;
        tableListDataSource.push({
            key: index,
            disabled: i % 6 === 0,
            href: 'https://ant.design',
            avatar: [
                'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
                'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
            ][i % 2],
            name: `TradeCode ${index}`,
            owner: '曲丽丽',
            desc: '这是一段描述',
            callNo: Math.floor(Math.random() * 1000),
            status: Math.floor(Math.random() * 10) % 4,
            updatedAt: moment().format('YYYY-MM-DD'),
            createdAt: moment().format('YYYY-MM-DD'),
            progress: Math.ceil(Math.random() * 100),
        });
    }
    tableListDataSource.reverse();
    return tableListDataSource;
};

class PublicController {
    constructor() { }
    async getCaptcha(ctx) {
        // // 获取query数据
        // const query = ctx.request.query
        // console.log('query', query)
        // const newCaptcha = svgCaptcha.create({
        //     size: 4,
        //     // 去除容易混淆的文字
        //     ignoreChars: '0o1il',
        //     color: true,
        //     // 干扰线
        //     noise: Math.floor(Math.random() * 5),
        //     width: 150,
        //     height: 38
        // })
        // // 设置3分钟超时时间
        // setValue(query.sid, newCaptcha.text, 3 * 600)
        // getValue(query.sid).then(res => {
        //     console.log('res', res)
        // })
        // ctx.body = {
        //     code: 200,
        //     data: newCaptcha.data
        // }
        ctx.body = {
            code: 200,
            data: {
                note1: '123',
                note2: 22,
                note3: 'asdasd'
            }
        }
    }


    async list(ctx) {
        // 获取query数据
        const query = ctx.request.query
        const { current, pageSize } = query
        console.log(current, pageSize)
        let tableListDataSource = genList(1, 100)
        const result = {
            data: tableListDataSource,
            total: tableListDataSource.length,
            pageSize,
            current
        };
        ctx.body = {
            code: 200,
            msg: result
        }
    }
}

export default new PublicController()