import {userProfile} from "../api/api";

let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_POST = 'ADD-POST';
let SET_USERS_PROFILE = 'SET_USERS_PROFILE';

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
        newPostText: 'Welcome',
        profile: null

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_POST_TEXT :
            return {
                    ...state,
                    newPostText: action.newText
                }


        case ADD_POST :
            let newPost = {
                id: '2',
                message: state.newPostText,
                likesCount: '0',
                avatar: 'https://img1.freepng.ru/20180529/bxp/kisspng-user-profile-computer-icons-login-user-avatars-5b0d9430b12e35.6568935815276165607257.jpg'
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',

            }

        case SET_USERS_PROFILE :
            return {
                ...state,
                profile: action.profile
            }



        default:
            return state;

    }
    return state;
}


export const addPost = () => ({type:ADD_POST});
export const updateNewPost = (text) => ({type:UPDATE_NEW_POST_TEXT,newText:text});
export const setUserProfile = (profile) => ({type:SET_USERS_PROFILE,profile});

export const profileThunk = (userId) => {
    return (dispatch) => {
        if (!userId) userId = 2
        userProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}


export default profileReducer;