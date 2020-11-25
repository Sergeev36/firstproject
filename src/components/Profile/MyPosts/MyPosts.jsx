
import Post from "./Post/Post";
import mod from "./MyPosts.module.css";



const MyPosts = () => {

  let messageData = [
      {id: "0", message: "It's my first post!", likesCount: "35"},
      {id: "1", message: "Hello,how are you?", likesCount: "4"}

  ];

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

                <Post message={messageData[0].message} likesCount={messageData[0].likesCount}/>
                <Post message={messageData[1].message} likesCount={messageData[1].likesCount}/>

            </div>
        </div>


    )
};

             export default MyPosts;

