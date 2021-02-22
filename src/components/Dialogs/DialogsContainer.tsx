import {ComponentType} from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {WithAuthRedirectComponent} from '../../hoc/withAuthRedirect';
import {AppStateType} from '../../redux/redux-store';
import {MessagePageType, sendMessageCreator} from '../../redux/messagePageReducer';


export type MapStatePropsType = {
    // описываем, что возвращает MapStateToProps
    messagePage: MessagePageType
}

export  type MapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    sendMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {messagePage: state.messagePage}
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose<ComponentType>(connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    WithAuthRedirectComponent)
(Dialogs)
/*//............3...........................2..............1
let AuthRedirectComponent =WithAuthRedirectComponent(Dialogs)
//.......................................4.....................................3
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)*/
//почему в одних скобках?????
//2 параметром целевая


