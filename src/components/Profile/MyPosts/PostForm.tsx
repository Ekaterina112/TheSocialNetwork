import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, minLengthCreator, required} from '../../../utilits/validators/postFormValidators';

export  type PostDataType = {}
//& IProps add if want to give some other props

const maxLength = maxLengthCreator(10)
const minLength = minLengthCreator(3)
const PostForm: React.FC<InjectedFormProps<PostDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'new post...'} name={'newPostBody'} component={'textarea'}
                   validate={[required, maxLength]}/>
            <button>Add post</button>
        </form>
    )
}
//обертка
const PostReduxForm = reduxForm<PostDataType>(
    //уникальное имя
    {form: 'dialog'})(PostForm)
export default PostReduxForm