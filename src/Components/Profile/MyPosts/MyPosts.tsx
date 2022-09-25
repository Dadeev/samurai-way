import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, postDataType} from "../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    minLengthCreator,
    required
} from "../../../utils/validators/validator";
import {FormControl} from "../../common/FormsControls/FormsControls";

type myPostType = {
    posts: postDataType[]
    dispatch: (action: ActionsTypes) => void
    addPost: (value: string) => void
}

export const MyPosts = (props: myPostType) => {

    const postsElems = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const AddPostHandler = (value: AddNewPostFormType) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={AddPostHandler}/>
            <div className={s.posts}>
                {postsElems}
            </div>
        </div>
    )
}

type AddNewPostFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)
const minLength1 = minLengthCreator(1)

const AddNewPostForm = (props: InjectedFormProps<AddNewPostFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl} name={'newPostText'} placeholder={'Post message'} type={'textarea'}
                       validate={[required, maxLength10, minLength1]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)