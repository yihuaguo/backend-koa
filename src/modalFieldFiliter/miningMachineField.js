import { removeRepeat } from '../utils/filiter'

export const getMiningMachineListField = (filiterField = []) => {
    const allField = [
        'id',
        'name',
        'state',
        'model',
        'config',
        'price',
        'hostPrice',
        'skillPrice',
        'description',
        'create_time',
        'htmlZjDocument',
        'imgUrl',
        'supply',
        'power',
        'consumption',
        'consumptionRatio',
        'supplyApi',
        'htmlGsDocument'
    ]
    return removeRepeat(allField, filiterField)
}

export default {
    getMiningMachineListField
}