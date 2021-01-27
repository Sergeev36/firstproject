import {usersACT, usersAPI} from "../api/api";

let FOLLOW = 'usersPage/FOLLOW';
let UNFOLLOW = 'usersPage/UNFOLLOW';
let SET_USERS = 'usersPage/SET_USERS';
let SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE';
let SET_USER_COUNT = 'usersPage/SET_USER_COUNT';
let TOGGLE_IS_FETCHING = 'usersPage/TOGGLE_IS_FETCHING';
let TOGGLE_FOLLOW_USER = 'usersPage/TOGGLE_FOLLOW_USER';


let initialState = {
    users: [],
    usersCount : 0,
    pageSize : 5,
    currentPage: 1,
    isFetching:false,
    followingInProgress:[]
}

const usersReducer = (state = initialState, action) => {
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



export const follow = (userId) => ({type:FOLLOW, userId});
export const unfollow = (userId) => ({type:UNFOLLOW, userId});
export const setUsers = (users) => ({type:SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type:SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (count) => ({type:SET_USER_COUNT, count});
export const setToggleIsFetching = (fetching) => ({type:TOGGLE_IS_FETCHING, fetching});
export const setFollowingInProgress = (fetching,userId) => ({type:TOGGLE_FOLLOW_USER, fetching,userId});


export const requestUsers = (currentPage, pageSize) => async (dispatch) => {

     dispatch(setToggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage,pageSize)
         dispatch(setToggleIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount))

}

export const getUsersPage = (pageNumber,pageSize) => async (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(setToggleIsFetching(true));
    let data = await usersAPI.getUsers2(pageNumber,pageSize)
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(data.items));
}

export const followThunk = (userId) => async (dispatch) => {
    dispatch(setFollowingInProgress(true, userId))
    let data = await usersACT.userFollow(userId)

    if (data.resultCode === 0) {
        dispatch(follow(userId))
    }

    dispatch(setFollowingInProgress(false, userId))

}

export const unfollowThunk = (userId) => async (dispatch) => {
    dispatch(setFollowingInProgress(true, userId))
    let data = await usersACT.userUnfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollow(userId))
    }

    dispatch(setFollowingInProgress(false, userId))

}










export default usersReducer;
