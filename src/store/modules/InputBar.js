import { createAction, handleActions } from 'redux-actions';

const SEND_MESSAGE = "inputbar/SENDMESSAGE";

export const sendMessage = createAction(SEND_MESSAGE);

const initialState = {
    sendMsg: ''
};

export default handleActions({
    [SEND_MESSAGE]: (state, action) => {
        return { sendMsg: state.msg };
    }
}, initialState);
