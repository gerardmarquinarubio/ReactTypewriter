import React from 'react';
import { render, screen } from '@testing-library/react';
import Typewriter from "./Typewriter";
import { act } from 'react-dom/test-utils';

describe('Typewriter', () => {
    describe('should render without crashing', () => {
        it('using text prop', () => {
            render(<Typewriter text="Hello!" />);
        });
        it('using loop prop', () => {
            render(<Typewriter text="Hello!" loop={true} />);
        });
        it('using array prop', () => {
            render(<Typewriter text={["Hello!", "how", "are", "you?"]}/>);
        });
        it('using loop', () => {
            render(<Typewriter text="Hello!" loop={true} />);
        });
        it('using speed', () => {
            render(<Typewriter text="Hello!" speed={500} />);
        });
        it('using delay', () => {
            render(<Typewriter text="Hello!" delay={500} />);
        });
        it('using random', () => {
            render(<Typewriter text="Hello!" random={500} />);
        })
        it('using cursor', () => {
            render(<Typewriter text="Hello!" cursor={false} />);
        })
    });

    describe('should trigger events', () => {
        test('onStart', done => {
            render(<Typewriter text="Hello!" onStart={ () => done()} />);
        });
        test('onFinished', done => {
            render(<Typewriter text="Hello!" onFinished={ () => done()} />);
        });
    });
    describe('should render text properly', () => {
        test('single string',  done => {
            render(<Typewriter text="Hello!" cursor={false} onFinished={ () => {
                expect(screen.getByText('Hello!')).toBeInTheDocument();
                done();
            }}/>);
        });
        test('array of string',  done => {
            render(<Typewriter text={["Now!", "Hello!"]} cursor={false} onFinished={ () => {
                expect(screen.getByText('Hello!')).toBeInTheDocument();
                done();
            }}/>);
        });
    });
});