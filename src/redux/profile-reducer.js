let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_POST = 'ADD-POST';

const profileReducer = (state,action) => {
    switch (action.type) {

        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;
            return state;


        case ADD_POST :
            let newPost = {
                id: '2',
                message: state.newPostText,
                likesCount: '0',
                avatar: 'https://img1.freepng.ru/20180529/bxp/kisspng-user-profile-computer-icons-login-user-avatars-5b0d9430b12e35.6568935815276165607257.jpg'
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;

    }
    return state;
}


export const addPostActionCreator = () => ({type:ADD_POST});
export const updateNewPostActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT,newText:text});



export default profileReducer;