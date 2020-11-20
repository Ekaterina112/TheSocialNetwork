import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

 export  type PostDataType= {

}
//& IProps add if want to give some other props
const PostForm:React.FC<InjectedFormProps<PostDataType>> =(props) => {

    return (

                /*<textarea
                    onChange={onPostChange}
                    value={props.newPostText}/>*/
       /* <button onClick={addPost}>Add post</button>
        <button>Remove</button>*/
            <form onSubmit={props.handleSubmit}>
                <Field placeholder={"new post..."} name={'newPostBody'} component={'textarea'}/>
                <button>Add post</button>
                <button>Remove</button>
            </form>
    )
}
//обертка
const  PostReduxForm= reduxForm<PostDataType>(
    //уникальное имя
    {form: 'dialog'})(PostForm)
export default PostReduxForm