
export let getUsers = (state) => {
   return state.usersPage.users

 }

 export let getPageSize = (state) => {
   return state.usersPage.pageSize

 }

 export let getUsersCount = (state) => {
   return state.usersPage.usersCount

 }

 export let getCurrentPage = (state) => {
   return state.usersPage.currentPage

 }

 export let getIsFetching = (state) => {
   return state.usersPage.isFetching

}
export let getFollowingInProgress = (state) => {
   return state.usersPage.followingInProgress

 }