import {usersACT, usersAPI} from "../api/api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_USER_COUNT = 'SET_USER_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW_USER';


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


export const getUsers = (currentPage,pageSize) => {
 return (dispatch) => {

     dispatch(setToggleIsFetching(true));
     usersAPI.getUsers(currentPage,pageSize).then(data => {
         dispatch(setToggleIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount))
     })
 }


}
export const getUsersPage = (pageNumber,pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(setToggleIsFetching(true));
        usersAPI.getUsers2(pageNumber,pageSize).then(data => {
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(data.items));
        })
    }
}

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, userId))
        usersACT.userFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
            })
        dispatch(setFollowingInProgress(false,userId))
    }
}
export const unfollowThunk = (userId) => {
    return (dispatch) => {
       dispatch(setFollowingInProgress(true, userId))
        usersACT.userUnfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                 dispatch(unfollow(userId))
                }
            })
            dispatch(setFollowingInProgress(false,userId))
    }
}










export default usersReducer;
