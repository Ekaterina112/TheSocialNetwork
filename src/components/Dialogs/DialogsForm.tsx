import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Textarea} from '../common/formController/FormController';
import {maxLengthCreator, minLengthCreator, required} from '../../utilits/validators/postFormValidators';

 export  type DialogsDataType= {

}
const maxLength = maxLengthCreator(20)
const minLength = minLengthCreator(5)

//& IProps add if want to give some other props
const DialogsForm:React.FC<InjectedFormProps<DialogsDataType>> =(props) => {

    return (
            <form onSubmit={props.handleSubmit}>

                <Field placeholder={"new message..."} name={'newMessageBody'} component={Textarea}
                       validate={[required, maxLength, minLength]} />
                <button>send</button>
            </form>
    )
}
//обертка
const  DialogsReduxForm= reduxForm<DialogsDataType>(
    //уникальное имя
    {form: 'dialog'})(DialogsForm)
export default DialogsReduxForm