import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postDataType} from "../../redux/state";


type myPostType = {
    posts: postDataType[]
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: myPostType) => {

    const postsElems = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const AddPostHandler = () => {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value)
            postMessageRef.current.value = ''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={postMessageRef}></textarea>
                </div>
                <div>
                    <button onClick={AddPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElems}
            </div>
        </div>
    )
}