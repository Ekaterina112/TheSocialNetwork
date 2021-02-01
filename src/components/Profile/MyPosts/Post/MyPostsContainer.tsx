import {addPostCreator} from '../../../../redux/profilePageReducer';
import MyPosts from '../MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../../../redux/redux-store';



const mapStateToProps = (state:AppStateType) =>{
    return {
        postData: state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {addPost: (newPostBody:string) => {
            dispatch(addPostCreator(newPostBody))},
    }
}
const MyPostsContainer= connect (mapStateToProps,mapDispatchToProps ) (MyPosts) //create container components

export default MyPostsContainer