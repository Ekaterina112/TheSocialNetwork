import React from 'react';
import '../../../App.css';
import Post from './Post/Post';
import {PostDataType} from '../../../redux/types';
import PostReduxForm from './PostForm';

type PropsType = {
    postData: Array<PostDataType>
    newPostText?: string
    addPost: (newPostBody:string) => void
}


const MyPosts = React.memo((props: PropsType) => {
    let posts = props.postData.map((p) => <Post key={p.id} message={p.message} count={p.count}/>)

    let addPost = (value:any) => {props.addPost(value.newPostBody)}

    return <div>
        <h3> my posts</h3>
        <PostReduxForm onSubmit={addPost}/>
        <div>
            {posts}
        </div>
    </div>
});

export default MyPosts