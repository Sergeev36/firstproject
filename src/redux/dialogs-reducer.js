
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state,action) => {

    switch (action.type) {
        case ADD_MESSAGE :
            state.messages.push({id:3,message:state.newMessageText});
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:

            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }






    return state;
}

export const addMessageActionCreator = () => ({type:ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT,newMessage:text});

export default dialogsReducer;