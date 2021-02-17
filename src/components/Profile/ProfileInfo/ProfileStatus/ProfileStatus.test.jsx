import React from 'react';
import ProfileStatus from './ProfileStatus';
import TestRenderer from 'react-test-renderer';

describe('Tests for ProfileStatus Component', () => {
    test('status from props should be in state', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status={'you are awesome'} updateStatus={() => {
        }}/>);
        const testInstance = testRenderer.getInstance();
        expect(testInstance.state.status).toBe('you are awesome');
    });
    test('span  should be on the page', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status={'you are awesome'} updateStatus={() => {
        }}/>);
        const testRoot = testRenderer.root;
        let span = testRoot.findByType("span");
        expect(span.length).not.toBeNull();
        expect(span.children[0]).toBe('you are awesome');
    });
    test('input not showed', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status={'you are awesome'} updateStatus={() => {
        }}/>);
        const testRoot = testRenderer.root;
        expect(() => {
            const input = testRoot.findByType('input')
        }).toThrow();

    });
    test('input should be displayed in editMode', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status={'you are awesome'} updateStatus={() => {
        }}/>);
        const testRoot = testRenderer.root;
        let span = testRoot.findByType("span");
        span.props.onDoubleClick();
        let input = testRoot.findByType("input");
        expect(input.props.value).toBe('you are awesome')
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const testRenderer = TestRenderer.create(<ProfileStatus status={'you are awesome'}
                                                                updateStatus={mockCallback}/>);
        const testInstance = testRenderer.getInstance();
        testInstance.deactivatedMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });
});