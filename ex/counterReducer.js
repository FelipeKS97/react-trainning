const INITIAL_STATE = { step:1, number:0 }

export default function (state, action) {
    switch(action.type) {
        case 'INC':
            return {...this.state, number: state.step + state.number}
        case 'DEC':
            return {...this.state, number: state.step - state.number}
        case 'STEP_CHANGED':
            return {...this.state, step: action.payload}
        default:
            return state
    }
}