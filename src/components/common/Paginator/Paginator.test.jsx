import React from 'react';
import TestRenderer from 'react-test-renderer';
import Paginator from "./Paginator";

describe('Tests for Paginator', () => {
    test('pages count is 11, but should be showed only 10', () => {
        const testRenderer = TestRenderer.create(<Paginator currentPage={1} onPageChanged={() => {
        }} pageSize={1} portionSize={10} totalItemsCount={11}/>);
        const testInstance = testRenderer.root;
        let span = testInstance.findAllByType('span')
        expect(span.length).toBe(10);
    });
    test('if pages count is more than ten,button NEXT should be showed', () => {
        const testRenderer = TestRenderer.create(<Paginator currentPage={1} onPageChanged={() => {
        }} pageSize={1} portionSize={10} totalItemsCount={11}/>);
        const testInstance = testRenderer.root;
        let button = testInstance.findAllByType('button')
        expect(button.length).toBe(1);
    });
});