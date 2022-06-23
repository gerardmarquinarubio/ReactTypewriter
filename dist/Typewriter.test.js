import React from 'react';
import { render, screen } from '@testing-library/react';
import Typewriter from "./Typewriter";
describe('Typewriter', () => {
    describe('should render without crashing', () => {
        it('using text prop', () => {
            render(React.createElement(Typewriter, { text: "Hello!" }));
        });
        it('using loop prop', () => {
            render(React.createElement(Typewriter, { text: "Hello!", loop: true }));
        });
        it('using array prop', () => {
            render(React.createElement(Typewriter, { text: ["Hello!", "how", "are", "you?"] }));
        });
        it('using loop', () => {
            render(React.createElement(Typewriter, { text: "Hello!", loop: true }));
        });
        it('using speed', () => {
            render(React.createElement(Typewriter, { text: "Hello!", speed: 500 }));
        });
        it('using delay', () => {
            render(React.createElement(Typewriter, { text: "Hello!", delay: 500 }));
        });
        it('using random', () => {
            render(React.createElement(Typewriter, { text: "Hello!", random: 500 }));
        });
        it('using cursor', () => {
            render(React.createElement(Typewriter, { text: "Hello!", cursor: false }));
        });
    });
    describe('should trigger events', () => {
        test('onStart', done => {
            render(React.createElement(Typewriter, { text: "Hello!", onStart: () => done() }));
        });
        test('onFinished', done => {
            render(React.createElement(Typewriter, { text: "Hello!", onFinished: () => done() }));
        });
    });
    describe('should render text properly', () => {
        test('single string', done => {
            render(React.createElement(Typewriter, { text: "Hello!", cursor: false, onFinished: () => {
                    expect(screen.getByText('Hello!')).toBeInTheDocument();
                    done();
                } }));
        });
        test('array of string', done => {
            render(React.createElement(Typewriter, { text: ["Now!", "Hello!"], cursor: false, onFinished: () => {
                    expect(screen.getByText('Hello!')).toBeInTheDocument();
                    done();
                } }));
        });
    });
});
