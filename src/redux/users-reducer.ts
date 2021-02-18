import {usersACT, usersAPI} from "../api/api";
import {photosType} from "../components/types/types";

let FOLLOW = 'usersPage/FOLLOW';
let UNFOLLOW = 'usersPage/UNFOLLOW';
let SET_USERS = 'usersPage/SET_USERS';
let SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE';
let SET_USER_COUNT = 'usersPage/SET_USER_COUNT';
let TOGGLE_IS_FETCHING = 'usersPage/TOGGLE_IS_FETCHING';
let TOGGLE_FOLLOW_USER = 'usersPage/TOGGLE_FOLLOW_USER';

type usersType = {
    id: number
    name: string
    status: string
    photos:photosType
    followed:boolean
}

let initialState = {
    users: [] as Array <usersType> ,
    usersCount : 0 ,
    pageSize : 5,
    currentPage: 1,
    isFetching:false,
    followingInProgress:[] as Array <number> // array of users id
}

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any):initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case SET_USERS: {
            return {...state,users:action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state,currentPage:action.pageNumber}
        }

        case SET_USER_COUNT: {
            return {...state,usersCount:action.count}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state,isFetching:action.fetching}
        }

        case TOGGLE_FOLLOW_USER: {
            return  {...state,followingInProgress:action.fetching
                    ? [...state.followingInProgress ,action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }

}


type followType = {
    type:typeof FOLLOW,
    userId:number
}
export const follow = (userId:number):followType => ({type:FOLLOW, userId});

type unfollowType = {
    type:typeof UNFOLLOW,
    userId:number
}
export const unfollow = (userId:number):unfollowType => ({type:UNFOLLOW, userId});

type setUsersType = {
    type:typeof SET_USERS,
    users:Array <usersType>
}
export const setUsers = (users:Array <usersType>):setUsersType => ({type:SET_USERS, users});

type setCurrentPageType = {
    type:typeof SET_CURRENT_PAGE,
    pageNumber:number
}
export const setCurrentPage = (pageNumber:number):setCurrentPageType => ({type:SET_CURRENT_PAGE, pageNumber});

type setTotalUsersCountType = {
    type:typeof SET_USER_COUNT,
    count:number
}
export const setTotalUsersCount = (count:number):setTotalUsersCountType => ({type:SET_USER_COUNT, count});

type setToggleIsFetchingType = {
    type:typeof TOGGLE_IS_FETCHING,
    fetching:boolean
}
export const setToggleIsFetching = (fetching:boolean):setToggleIsFetchingType => ({type:TOGGLE_IS_FETCHING, fetching});

type setFollowingInProgressType = {
    type:typeof TOGGLE_FOLLOW_USER,
    fetching:boolean
    userId:number
}
export const setFollowingInProgress = (fetching:boolean,userId:number):setFollowingInProgressType => ({type:TOGGLE_FOLLOW_USER, fetching,userId});


export const requestUsers = (currentPage:number, pageSize:number) => async (dispatch:any) => {

     dispatch(setToggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage,pageSize)
         dispatch(setToggleIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount))

}

export const getUsersPage = (pageNumber:number,pageSize:number) => async (dispatch:any) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(setToggleIsFetching(true));
    let data = await usersAPI.getUsers2(pageNumber,pageSize)
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(data.items));
}

export const followThunk = (userId:number) => async (dispatch:any) => {
    dispatch(setFollowingInProgress(true, userId))
    let data = await usersACT.userFollow(userId)

    if (data.resultCode === 0) {
        dispatch(follow(userId))
    }

    dispatch(setFollowingInProgress(false, userId))

}

export const unfollowThunk = (userId:number) => async (dispatch:any) => {
    dispatch(setFollowingInProgress(true, userId))
    let data = await usersACT.userUnfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollow(userId))
    }

    dispatch(setFollowingInProgress(false, userId))

}

export default usersReducer;
