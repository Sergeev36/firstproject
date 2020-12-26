import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPageAC,
    followAC,
    setUsersAC,
    unfollowAC,
    setTotalUsersCountAC,
    setToggleIsFetchingAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloager";




class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)})
    }

    render () {
        return <>
            {this.props.isFetching ? <Preloader/>:null}
            <Users users={this.props.users}
                      usersCount={this.props.usersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      />

        </>

}}

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        usersCount:state.usersPage.usersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching


    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        },

        setToggleIsFetching: (fetching) => {
            dispatch(setToggleIsFetchingAC(fetching))
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (UsersAPIComponent)