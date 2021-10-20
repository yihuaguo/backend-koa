import { removeRepeat } from '../utils/filiter'

export const getRecruitListField = (filiterField = []) => {
    const allField = [
        'id',
        'postName',
        'school',
        'sum',
        'experience',
        'create_time',
        'htmlDocument',
    ]
    return removeRepeat(allField, filiterField)
}

export default {
    getRecruitListField
}