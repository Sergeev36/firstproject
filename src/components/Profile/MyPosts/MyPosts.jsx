
import Post from "./Post/Post";
import mod from "./MyPosts.module.css";



const MyPosts = (props) => {



  let dialogsElements = props.posts.map(m => <Post message={m.message} likesCount={m.likesCount} avatar={m.avatar}/>);

    return (
        <div>
            <div className={mod.newPost}>

                <h3>New Post</h3>

                <div>
                    <textarea cols="20" rows="3"></textarea>
                </div>

                <div>
                    <button>send</button>
                </div>

            </div>

            <div className={mod.posts}>
                {dialogsElements}
            </div>
        </div>


    )
};

             export default MyPosts;

