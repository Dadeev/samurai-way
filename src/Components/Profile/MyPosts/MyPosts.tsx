import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type postDataType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = () => {
    const posts: postDataType[] = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ]

    const postsElems = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

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