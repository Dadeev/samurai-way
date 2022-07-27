import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, addPostAC, postDataType, UpdateNewPostTextAC} from "../../redux/state";


type myPostType = {
    posts: postDataType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const MyPosts = (props: myPostType) => {

    const postsElems = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const AddPostHandler = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = () => {
        let text = postMessageRef.current!.value // использовал '!' знак, т.к писало - object is possibly null
        props.dispatch(UpdateNewPostTextAC(text));
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