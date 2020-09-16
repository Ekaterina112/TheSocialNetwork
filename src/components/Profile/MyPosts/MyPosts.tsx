
import React from 'react';
import '../../../App.css';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {PostDataType, ProfilePageType} from '../../redux/state';
import {BrowserRouter} from 'react-router-dom';

type PropsType ={
    postData: Array<PostDataType>
    addPosts:(mess:string)=>void
}


const MyPosts = (props:PropsType) => {
    let posts = props.postData.map((p:any) => <Post message={p.message} count={p.count}/>)

    let newPostElement= React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostElement.current) {
            props.addPosts(newPostElement.current.value)
            newPostElement.current.value=" "
        }
    }
    return  <div>
        <div> my posts
            <div>
                <textarea ref={newPostElement} />
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