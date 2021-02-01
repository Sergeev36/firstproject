import {ProfileAPI} from "../api/api";


let ADD_POST = 'profilePage/ADD-POST';
let SET_USERS_PROFILE = 'profilePage/SET_USERS_PROFILE';
let SET_STATUS = 'profilePage/STATUS';
let SET_PHOTO = 'profilePage/SET_PHOTO';

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

        case SET_PHOTO :
            return {
                ...state,
                profile: {...state.profile,photos:action.photos}
            }



        default:
            return state;

    }
    return state;
}


export const addPost = (postText) => ({type:ADD_POST,postText});
export const setUserProfile = (profile) => ({type:SET_USERS_PROFILE,profile});
export const setStatus = (status) => ({type:SET_STATUS,status});
export const setPhoto = (photos) => ({type:SET_PHOTO,photos});

export const profileThunk = (userId) => async (dispatch) => {
        let data = await ProfileAPI.userProfile(userId)
                dispatch(setUserProfile(data))

}
export const getStatusThunk = (userId) => async (dispatch) => {
    let data = await  ProfileAPI.getStatus(userId)
            dispatch(setStatus(data))

}
export const updateStatusThunk = (status) =>async (dispatch) => {
    let data = await ProfileAPI.updateStatus(status)
                if (data.resultCode === 0)
                dispatch(setStatus(status))

}
export const updatePhotoThunk = (photo) =>async (dispatch) => {
    let data = await ProfileAPI.updatePhoto(photo)
                if (data.resultCode === 0)
                dispatch(setPhoto(data.data.photos))

}


export default profileReducer;