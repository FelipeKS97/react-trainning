const INITIAL_VALUE = { value : 'kk eae men'}

export default function (state = INITIAL_VALUE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            return {value: action.payload}
        default:
            return state
    }
}