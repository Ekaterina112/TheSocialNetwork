import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

 export  type DialogsDataType= {

}
//& IProps add if want to give some other props
const DialogsForm:React.FC<InjectedFormProps<DialogsDataType>> =(props) => {

    return (
            <form onSubmit={props.handleSubmit}>

                <Field placeholder={"new message..."} name={'newMessageBody'} component={'textarea'}/>
                <button>send</button>
            </form>
    )
}
//обертка
const  DialogsReduxForm= reduxForm<DialogsDataType>(
    //уникальное имя
    {form: 'dialog'})(DialogsForm)
export default DialogsReduxForm