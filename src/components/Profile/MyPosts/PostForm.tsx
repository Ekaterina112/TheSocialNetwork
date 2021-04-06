import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, minLengthCreator, required} from '../../../utilits/validators/postFormValidators';
import {Textarea} from '../../common/formController/FormController';
import {Button} from "antd";

export  type PostDataType = {}
//& IProps add if want to give some other props

const maxLength = maxLengthCreator(10)
const minLength = minLengthCreator(3)
const PostForm: React.FC<InjectedFormProps<PostDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'new post...'} name={'newPostBody'} component={Textarea}
                   validate={[required, maxLength, minLength]}/>
            <Button>Add post</Button>
        </form>
    )
}
//обертка
const PostReduxForm = reduxForm<PostDataType>(
    //уникальное имя
    {form: 'dialog'})(PostForm)
export default PostReduxForm