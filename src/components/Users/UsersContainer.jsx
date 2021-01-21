import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {requestUsers, getUsersPage, unfollowThunk, followThunk
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloager";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsers,
    getUsersCount
} from "../../redux/users-selectors";




class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage,this.props.pageSize)

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersPage(pageNumber,this.props.pageSize)
        }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                   users={this.props.users}
                   usersCount={this.props.usersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   setFollowingInProgress={this.props.setFollowingInProgress}
                   unfollowThunk={this.props.unfollowThunk}
                   followThunk={this.props.followThunk}
            />

        </>

    }
}



let mapStateToProps = (state) => {
    return {
        users:getUsers(state),
        pageSize: getPageSize(state),
        usersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)



    }
}


export default connect(mapStateToProps,
    {
    requestUsers,getUsersPage,unfollowThunk,followThunk
    })(UsersAPIComponent)