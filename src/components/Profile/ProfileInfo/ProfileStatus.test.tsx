import React from 'react';
import ProfileStatus from './ProfileStatus';
import {create} from 'react-test-renderer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


describe('Tests for ProfileStatus Component', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileStatusWithHooks status={'you are awesome'} updateStatus={() => {
        }}/>)
        const instance = component.getInstance()
        expect(instance?.state.status).toBe('you are awesome')
    });
    test('input should be on the page', () => {
        const component = create(<ProfileStatus status={'you are awesome'} updateStatus={() => {
        }}/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span?.length).toBe(1)
    });
    test('input should be with a right status', () => {
        const component = create(<ProfileStatus status={'you are awesome'} updateStatus={() => {
        }}/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span.innerText).toBe('you are awesome')
    });
});