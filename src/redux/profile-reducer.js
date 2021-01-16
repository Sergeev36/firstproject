import {ProfileAPI} from "../api/api";


let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_POST = 'ADD-POST';
let SET_USERS_PROFILE = 'SET_USERS_PROFILE';
let SET_STATUS = 'STATUS';

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
        profile: null,
        status:""

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {



        case ADD_POST :
            let newPost = {
                id: '2',
                message: action.postText,
                likesCount: '0',
                avatar: 'https://img1.freepng.ru/20180529/bxp/kisspng-user-profile-computer-icons-login-user-avatars-5b0d9430b12e35.6568935815276165607257.jpg'
            };

            return {
                ...state,
                posts: [...state.posts, newPost]


            }

        case SET_USERS_PROFILE :
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }



        default:
            return state;

    }
    return state;
}


export const addPost = (postText) => ({type:ADD_POST,postText});
export const setUserProfile = (profile) => ({type:SET_USERS_PROFILE,profile});
export const setStatus = (status) => ({type:SET_STATUS,status});

export const profileThunk = (userId) => {
    return (dispatch) => {
        ProfileAPI.userProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getStatusThunk = (userId) => {
    return (dispatch) => {

        ProfileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}
export const updateStatusThunk = (status) => {
    return (dispatch) => {

        ProfileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0)
                dispatch(setStatus(status))
            })
    }
}


export default profileReducer;