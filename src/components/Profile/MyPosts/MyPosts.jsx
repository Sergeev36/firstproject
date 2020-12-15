import React from 'react';
import Post from "./Post/Post";
import mod from "./MyPosts.module.css";




const MyPosts = (props) => {

    let dialogsElements = props. profilePage.posts.map(m => <Post message={m.message} likesCount={m.likesCount} avatar={m.avatar}/>);

    let newPostElement = React.createRef();

    let onPostChange = () => {
       let text = newPostElement.current.value;
       props.updateNewPost(text)
    };

    let onAddPost = () => {
       props.addPost()
    };



    return (
        <div>
            <div className={mod.newPost}>

                <h3>New Post</h3>

                <div className={mod.newText}>
                    <textarea cols="20" rows="3"  ref={newPostElement}
                              value={props.profilePage.newPostText}
                              onChange={onPostChange}/>
                </div>

                <div className={mod.button}>
                    <button onClick={onAddPost}>add post</button>
                </div>

            </div>

            <div className={mod.posts}>
                {dialogsElements}
            </div>
        </div>


    )
};

             export default MyPosts;

