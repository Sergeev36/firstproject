
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
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
       </div>


    )
};

             export default MyPosts;

