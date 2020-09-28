
import React from 'react';
import '../../../App.css';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {
    ActionTypes,
    addPostCreator,
    PostDataType,
    ProfilePageType,
    upDateNewPostTextCreator
} from '../../redux/state';
import {BrowserRouter} from 'react-router-dom';

type PropsType ={
    postData: Array<PostDataType>
    dispatch: (action:ActionTypes) => void
    newPostText: string
}


const MyPosts = (props:PropsType) => {
    let posts = props.postData.map((p) => <Post key={p.id} message={p.message} count={p.count}/>)

    let newPostElement= React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
            props.dispatch(addPostCreator())
    }
    let onPostChange =()=> {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(upDateNewPostTextCreator(text))
        }
    }
    return  <div>
        <div> my posts
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>

                <button onClick={addPost} >Add post</button>
                <button>Remove</button>
            </div>
        </div>
        {posts}
    </div>
}
export default MyPosts