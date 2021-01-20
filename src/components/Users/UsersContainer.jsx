import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {getUsers, getUsersPage, unfollowThunk, followThunk
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloager";




class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)

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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress



    }
}


export default connect(mapStateToProps,
    {
        getUsers,getUsersPage,unfollowThunk,followThunk
    })(UsersAPIComponent)