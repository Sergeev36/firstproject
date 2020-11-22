
import mod from "./Post.module.css"

const Post = () => {
    return (
        <div className={mod.post}>
            <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
            post 1
            <div className={mod.like}>like</div>
        </div>
    )

};

export default Post;