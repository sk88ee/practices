import { createAction, handleActions } from 'redux-actions';


const LASTMESSAGE = 'listmenu/LASTMESSAGE';

export const showMessage = createAction(LASTMESSAGE);

const initialState = {
    lastMsg: ''
}

export default handleActions({
    [LASTMESSAGE]: (state, action) => {
        return {lastMsg: state.lastMsg};
    }
}, initialState);

/*
export default function reducer(state = initialState, action) {

    switch(action.type) {
        case LASTMESSAGE:
            return { lastMsg: state.lastMsg};
        default:
            return state;
    }
}
*/
