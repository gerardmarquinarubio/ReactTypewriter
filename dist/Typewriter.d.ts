/// <reference types="react" />
export interface ITypewriterProps {
    text: string | string[];
    speed?: number;
    loop?: boolean;
    random?: number;
    delay?: number;
    cursor?: boolean;
    onFinished?: Function;
}
export default function Typewriter({ text, speed, loop, random, delay, cursor, onFinished }: ITypewriterProps): JSX.Element;
