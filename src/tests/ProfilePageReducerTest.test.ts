import profileReducer, {addPostCreator, deletePostCreator} from '../redux/profilePageReducer';
import {ProfilePageType} from '../redux/types';

let initialTestState: ProfilePageType

beforeEach(() => {
    initialTestState = {
        postData: [
            {id: '1', message: 'its for test', count: 100},
            {id: '2', message: 'only', count: 99},
        ],
        newPostText: 'it-kamasutra.com',
        profile: null,
        status: ''
    }
})
test('test addPostActionCreator', () => {
    let action = addPostCreator('test message')
    let testState = profileReducer(initialTestState, action)

    expect(testState.postData.length).toBe(3)
    expect(testState.postData[2].message).toBe('test message')
})
test('test deletePostActionCreator', () => {
    let action = deletePostCreator('1')
    let testState = profileReducer(initialTestState, action)

    expect(testState.postData.length).toBe(1)
    expect(testState.postData[0].message).toBe('only')
})