let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_POST = 'ADD-POST';

let initialState = {

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

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_POST_TEXT : {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        case ADD_POST : {
            let newPost = {
                id: '2',
                message: state.newPostText,
                likesCount: '0',
                avatar: 'https://img1.freepng.ru/20180529/bxp/kisspng-user-profile-computer-icons-login-user-avatars-5b0d9430b12e35.6568935815276165607257.jpg'
            };

            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        default:
            return state;

    }
    return state;
}


export const addPostActionCreator = () => ({type:ADD_POST});
export const updateNewPostActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT,newText:text});



export default profileReducer;