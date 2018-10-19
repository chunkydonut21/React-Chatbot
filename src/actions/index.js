import { ApiAiClient } from 'api-ai-javascript'
export const SEND_MESSAGE = 'send_message'

const client = new ApiAiClient({ accessToken: '44bcbe5af45c4af9a6315483edf06896' })

export const sendMessage = message => dispatch => {
    dispatch({ type: SEND_MESSAGE, payload: message })
    dispatch({
        type: SEND_MESSAGE,
        payload: {
            message: message,
            sender: 'You'
        }
    })
    client.textRequest(message).then(res => {
        dispatch({
            type: SEND_MESSAGE,
            payload: {
                message: res.result.fulfillment.speech,
                sender: 'Bot'
            }
        })
    })
}
