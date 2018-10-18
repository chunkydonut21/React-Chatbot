import { SEND_MESSAGE } from '../actions/index'

const INITIAL_STATE = {
    messageList: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return { ...state, messageList: [...state.messageList, action.payload] }
        default:
            return state
    }
}

export default reducer
