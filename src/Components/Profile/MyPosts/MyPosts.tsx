import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postDataType} from "../../redux/state";


type myPostType = {
    posts: postDataType[]
}

export const MyPosts = (props: myPostType) => {

    const postsElems = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElems}
            </div>
        </div>
    )
}