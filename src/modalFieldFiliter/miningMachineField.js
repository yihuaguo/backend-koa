import { removeRepeat } from '../utils/filiter'

export const getMiningMachineListField = (filiterField = []) => {
    const allField = [
        'id',
        'name',
        'state',
        'model',
        'config',
        'price',
        'core',
        'type',
        'hostPrice',
        'skillPrice',
        'description',
        'create_time',
        'htmlZjDocument',
        'imgUrl',
        'power',
        'htmlGsDocument'
    ]
    return removeRepeat(allField, filiterField)
}

export default {
    getMiningMachineListField
}