import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const UPDATE_MESSAGE = "inputbar/UPDATEMESSAGE";
const SEND_MESSAGE = "inputbar/SENDMESSAGE";

export const updateMessage = createAction(UPDATE_MESSAGE);
export const sendMessage = createAction(SEND_MESSAGE, msg => msg);

let id=0;

const initialState = Map({
    sendMsg: '',
    msgList: List()
});

export default handleActions({
    [UPDATE_MESSAGE]: (state, action) => state.set('sendMsg', action.payload),
    [SEND_MESSAGE]: (state, { payload: msg }) => {
        const list = Map({id: id++, data: msg});
        return state.update('msgList', msgList => msgList.push(list))
    }
}, initialState);
