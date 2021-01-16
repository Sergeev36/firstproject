import React from 'react';
import Post from "./Post/Post";
import mod from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";









const MyPostForm = (props) => {



    return (
        <form onSubmit={props.handleSubmit} className={mod.newPost}>

                <h3>New Post</h3>

                <div className={mod.newText}>
                    <Field name="postText" component="input" type="textarea"/>
                </div>

                <div className={mod.button}><button>Add post</button></div>


        </form>


    )
}

const PostReduxForm = reduxForm({
    form: 'newPostText'
})(MyPostForm)


const MyPosts = (props) => {

    const addNewPost = (value) => {
        props.addPost(value.postText)
    }

    let dialogsElements = props. profilePage.posts.map(m => <Post key={m.id} message={m.message} likesCount={m.likesCount} avatar={m.avatar}/>);

    return (
        <div>
            <div><PostReduxForm onSubmit={addNewPost}/></div>


            <div className={mod.posts}>
                {dialogsElements}
            </div>
        </div>
    )
};

             export default MyPosts;

