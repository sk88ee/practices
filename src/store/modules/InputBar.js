import { createAction, handleActions } from 'redux-actions';

const UPDATE_MESSAGE = "inputbar/UPDATEMESSAGE";
const SEND_MESSAGE = "inputbar/SENDMESSAGE";

export const updateMessage = createAction(UPDATE_MESSAGE, msg => msg);
export const sendMessage = createAction(SEND_MESSAGE, msg => msg);

const initialState = {
    sendMsg: ''
};

export default handleActions({
    [UPDATE_MESSAGE]: (state, action) => {
        return { sendMsg: action.msg }
    },
    [SEND_MESSAGE]: (state, action) => {
        return { sendMsg: action.msg };
    }
}, initialState);
