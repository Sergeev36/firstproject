import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState() ;

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    };

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };

    return <MyPosts addPost={addPost}
                    updateNewPost={onPostChange}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
}


    export default MyPostsContainer;