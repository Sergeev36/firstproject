let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_POST = 'ADD-POST';

let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let ADD_MESSAGE = 'ADD-MESSAGE';


let store = {

 _callSubscriber () {},

 _state: {

  profilePage: {
   posts: [
    {
     id: "0",
     message: "It's my first post!",
     likesCount: "35",
     avatar: "https://twitchinfo.ru/wp-content/uploads/2020/01/ava-bigbrauz.png"
    },
    {
     id: "1",
     message: "Hello,how are you?",
     likesCount: "4",
     avatar: "https://i.pinimg.com/originals/97/ff/74/97ff74dc031d3301248dd4d5546254a6.png"
    }
   ],
   newPostText: 'Welcome'
  },

  dialogsPage: {
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
    {
     id: "4",
     name: "Roman",
     avatar: "https://img2.freepng.ru/20180413/gee/kisspng-discord-avatar-twitch-youtube-profile-5ad03f365071c0.1274698915235971103295.jpg"
    }
   ],
   newMessageText: 'Hello'
  },

  friendsPage: {
   friends: [
    {id: "0", name: "Sergey", avatar: "https://twitchinfo.ru/wp-content/uploads/2020/01/ava-bigbrauz.png"},
    {
     id: "1",
     name: "Victor",
     avatar: "https://shutniki.club/wp-content/uploads/2019/12/0aeb27b230deae824f3d1bce090bc2e9.png"
    },
    {id: "2", name: "Olga", avatar: "https://i.pinimg.com/originals/97/ff/74/97ff74dc031d3301248dd4d5546254a6.png"}
   ]
  }

 },

 getState () {
  return this._state;
 },

 subscribe(observer) {
  this._callSubscriber = observer
 },


 dispatch (action) {
  if (action.type === ADD_POST) {
   let newPost = {
    id: '2',
    message: this._state.profilePage.newPostText,
    likesCount: '0',
    avatar: 'https://img1.freepng.ru/20180529/bxp/kisspng-user-profile-computer-icons-login-user-avatars-5b0d9430b12e35.6568935815276165607257.jpg'
   };

   this._state.profilePage.posts.push(newPost);
   this._state.profilePage.newPostText = '';
   this._callSubscriber(this._state);
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
   this._state.profilePage.newPostText = action.newText;
   this._callSubscriber(this._state);
  } else if (action.type === ADD_MESSAGE) {
   let newMessage = {
    id: '3',
    message: this._state.dialogsPage.newMessageText
   };

   this._state.dialogsPage.messages.push(newMessage);
   this._state.dialogsPage.newMessageText = '';
   this._callSubscriber(this._state);
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
   this._state.dialogsPage.newMessageText = action.newMessage;
   this._callSubscriber(this._state);
  }

 }






};


export const addPostActionCreator = () => ({type:ADD_POST});
export const updateNewPostActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT,newText:text});

export const addMessageActionCreator = () => ({type:ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT,newMessage:text});


export default store;