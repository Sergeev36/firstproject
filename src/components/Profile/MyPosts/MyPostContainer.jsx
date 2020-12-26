import React from 'react';
import MyPosts from "./MyPosts";
import {addPost, updateNewPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
         profilePage: state.profilePage
    }
};




const MyPostsContainer = connect (mapStateToProps, {updateNewPost,addPost}) (MyPosts);


    export default MyPostsContainer;