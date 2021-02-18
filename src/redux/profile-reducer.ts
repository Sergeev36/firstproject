import {ProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {photosType, postsType, profileType} from "../components/types/types";


let ADD_POST = 'profilePage/ADD-POST';
let SET_USERS_PROFILE = 'profilePage/SET_USERS_PROFILE';
let SET_STATUS = 'profilePage/STATUS';
let SET_PHOTO = 'profilePage/SET_PHOTO';


let initialState = {

        posts: [
            {
                id: 0,
                message: "It's my first post!",
                likesCount: 35,
                avatar: "https://twitchinfo.ru/wp-content/uploads/2020/01/ava-bigbrauz.png"
            } ,
            {
                id: 1,
                message: "Hello,how are you?",
                likesCount: 4,
                avatar: "https://i.pinimg.com/originals/97/ff/74/97ff74dc031d3301248dd4d5546254a6.png"
            }
        ] as Array <postsType>,
        profile: null as profileType | null,
        status:""

}

type initialStateType = typeof initialState

const profileReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {



        case ADD_POST :
            let newPost = {
                id: 2,
                message: action.postText,
                likesCount: 0,
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
                profile: {...state.profile,photos:action.photos} as profileType
            }



        default:
            return state;

    }
}

type addPostType = {
    type:typeof ADD_POST,
    postText:string
}
export const addPost = (postText:string):addPostType => ({type:ADD_POST,postText});

type setUserProfileType = {
    type:typeof SET_USERS_PROFILE,
    profile:profileType

}
export const setUserProfile = (profile:profileType):setUserProfileType => ({type:SET_USERS_PROFILE,profile});

type setStatusType = {
    type:typeof SET_STATUS,
    status:string

}
export const setStatus = (status:string): setStatusType => ({type:SET_STATUS,status});

type setPhotoType = {
    type:typeof SET_PHOTO,
    photos: photosType

}
export const setPhoto = (photos:photosType):setPhotoType => ({type:SET_PHOTO,photos});


export const profileThunk = (userId:number) => async (dispatch:any) => {
        let data = await ProfileAPI.userProfile(userId)
                dispatch(setUserProfile(data))

}
export const getStatusThunk = (userId:number) => async (dispatch:any) => {
    let data = await  ProfileAPI.getStatus(userId)
            dispatch(setStatus(data))

}
export const updateStatusThunk = (status:string) =>async (dispatch:any) => {
    let data = await ProfileAPI.updateStatus(status)
                if (data.resultCode === 0)
                dispatch(setStatus(status))

}
export const updatePhotoThunk = (photo:photosType) =>async (dispatch:any) => {
    let data = await ProfileAPI.updatePhoto(photo)
                if (data.resultCode === 0)
                dispatch(setPhoto(data.data.photos))

}

export const dataThunk = (profile:profileType) =>async (dispatch:any,getState:any) => {
    const userId = getState().auth.id
    let data = await ProfileAPI.updateData(profile)
      if (data.resultCode === 0) {
          dispatch(profileThunk(userId))
      } else {
          dispatch(stopSubmit("data",{_error:data.messages[0]}));
          return Promise.reject(data.messages[0])
      }


}


export default profileReducer;