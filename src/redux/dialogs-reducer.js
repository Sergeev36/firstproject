
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {

        messages: [
            {id: "0", message: "Great job,thank you!"},
            {id: "1", message: "Hi,I'm still happy!!"},
            {id: "2", message: "Hello,how are you?!"}
        ],
        names: [
            {id: "0", name: "Sergey", avatar: "https://twitchinfo.ru/wp-content/uploads/2020/01/ava-bigbrauz.png"},
            {
                id: "1",
                name: "Victor",
                avatar: "https://shutniki.club/wp-content/uploads/2019/12/0aeb27b230deae824f3d1bce090bc2e9.png"
            },
            {id: "2", name: "Olga", avatar: "https://i.pinimg.com/originals/97/ff/74/97ff74dc031d3301248dd4d5546254a6.png"},
            {id: "3", name: "Ekaterina", avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"},
            {id: "4", name: "Roman", avatar: "https://img2.freepng.ru/20180413/gee/kisspng-discord-avatar-twitch-youtube-profile-5ad03f365071c0.1274698915235971103295.jpg"}
        ],
        newMessageText: 'Hello'

}

const dialogsReducer = (state=initialState,action) => {

    switch (action.type) {
        case ADD_MESSAGE : {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({id: 3, message: state.newMessageText});
            stateCopy.newMessageText = '';
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        }
        default:
            return state;
    }






    return state;
}

export const addMessageActionCreator = () => ({type:ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT,newMessage:text});

export default dialogsReducer;