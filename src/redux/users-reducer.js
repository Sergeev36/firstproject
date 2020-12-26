let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_USER_COUNT = 'SET_USER_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [],
    usersCount : 0,
    pageSize : 5,
    currentPage: 1,
    isFetching:false
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

export default usersReducer;
