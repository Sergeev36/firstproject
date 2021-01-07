import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPage,
    follow,
    setUsers,
    unfollow,
    setTotalUsersCount,
    setToggleIsFetching
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloager";
import {usersAPI} from "../../api/api";



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {

            this.props.setToggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers2(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(data.items)
            })
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
        isFetching: state.usersPage.isFetching


    }
}


export default connect(mapStateToProps,
    {
        setCurrentPage, follow, setUsers, unfollow, setTotalUsersCount, setToggleIsFetching
    })(UsersAPIComponent)