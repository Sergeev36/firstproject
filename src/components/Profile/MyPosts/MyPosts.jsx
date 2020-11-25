
import Post from "./Post/Post";
import mod from "./MyPosts.module.css";



const MyPosts = () => {

  let messages = [
      {id: "0", message: "It's my first post!", likesCount: "35"},
      {id: "1", message: "Hello,how are you?", likesCount: "4"}
  ];

  let dialogsElements = messages.map(m => <Post message={m.message} likesCount={m.likesCount} />);

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

