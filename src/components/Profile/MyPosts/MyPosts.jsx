
import Post from "./Post/Post";
import mod from "./MyPosts.module.css";


const MyPosts = () => {
    return (
      <div>
          < div className={mod.newpost}>
              <div>New post</div>

              <div>
                <textarea name="" id="" cols="20" rows="1"></textarea>
                <button>select</button>
              </div>
             </div>

                <div className={mod.myposts}>
                    <Post message="It's my first post!" likesCount="35" />
                    <Post message="Hello,how are you?" likesCount="4" />

                </div>
       </div>


    )
};

             export default MyPosts;

