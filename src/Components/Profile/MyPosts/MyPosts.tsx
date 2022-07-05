import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type postDataType = {
    id: number
    message: string
    likes: number
}

export const MyPosts = () => {
    let postData: postDataType[] = [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 1, message: 'It\'s my first post', likes: 20}
    ]

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
                {postData.map((el) => {
                    return (
                        <Post key={el.id} message={el.message} likes={el.likes}/>
                    )
                })}
            </div>
        </div>
    )
}