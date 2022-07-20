import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postDataType} from "../../redux/state";


type myPostType = {
    posts: postDataType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: myPostType) => {

    const postsElems = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const AddPostHandler = () => {
        props.addPost()
    }

    const onPostChange = () => {
        props.updateNewPostText(postMessageRef.current!.value); // использовал '!' знак, т.к писало - object is possibly null
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={postMessageRef} value={props.newPostText}/>
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