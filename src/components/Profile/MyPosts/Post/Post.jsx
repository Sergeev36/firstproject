
import mod from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={mod.post}>
            <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
            {props.message}
            <div className={mod.like}>
              <span>like</span>  {props.likesCount}
           </div>
        </div>
    )

};

export default Post;