import React from 'react';
import '../../../App.css';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostCreator, upDateNewPostTextCreator} from '../../redux/ProfilePageReducer';
import {ActionTypes, PostDataType} from '../../redux/store';

type PropsType ={
    postData: Array<PostDataType>
   /* dispatch: (action:ActionTypes) => void*/
    newPostText ?: string
    addPost:()=>void
    upDateNewPostText:(text:any) => void
}


const MyPosts = (props:PropsType) => {
    let posts = props.postData.map((p) => <Post key={p.id} message={p.message} count={p.count}/>)

    let newPostElement= React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.addPost();
    }
    let onPostChange =()=> {
            // @ts-ignore
            let text = newPostElement.current.value
            props.upDateNewPostText(text)
    }
    return  <div>
        <div> my posts
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText} />
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