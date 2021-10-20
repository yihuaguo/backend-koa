import { removeRepeat } from '../utils/filiter'

export const getMessageListModalField = (filiterField = []) => {
    const allField = [
        'id',
        'title',
        'imgUrl',
        'state',
        'typeId',
        'create_time',
        'htmlDocument',
    ]
    return removeRepeat(allField, filiterField)
}

export default {
    getMessageListModalField
}