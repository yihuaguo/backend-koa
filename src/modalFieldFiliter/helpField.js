import { removeRepeat } from '../utils/filiter'

export const getHelpListModalField = (filiterField = []) => {
    const allField = [
        'id',
        'title',
        'typeId',
        'create_time',
        'htmlDocument',
    ]
    return removeRepeat(allField, filiterField)
}

export default {
    getHelpListModalField
}