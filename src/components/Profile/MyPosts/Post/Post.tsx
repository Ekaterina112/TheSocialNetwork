import React from 'react';
import '../../../../App.css';
import classes from './Post.module.css'

type PostType = {
    message: string
    count: number
}

const Post: React.FC<PostType> = (props) => {
    return <div>
        {props.message}
        <div>{props.count} </div>
    </div>

}
export default Post