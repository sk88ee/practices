import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const UPDATE_MESSAGE = "inputbar/UPDATEMESSAGE";
const SEND_MESSAGE = "inputbar/SENDMESSAGE";

export const updateMessage = createAction(UPDATE_MESSAGE, msg => msg);
export const sendMessage = createAction(SEND_MESSAGE, text => text);

const initialState = Map({
    sendMsg: '',
    msgList: List()
});

export default handleActions({
    [UPDATE_MESSAGE]: (state, action) => state.set('sendMsg', action.payload.sendMsg),
    [SEND_MESSAGE]: (state, {payload: text}) => {
        const msg = Map({text});
        state.update('msgList', msgList => msgList.push(msg))
    }
}, initialState);
