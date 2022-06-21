/// <reference types="react" />
export interface ITypewriterProps {
    text: string | string[];
    speed?: number;
    loop?: boolean;
    random?: number;
    delay?: number;
    cursor?: boolean;
}
export default function Typewriter({ text, speed, loop, random, delay, cursor }: ITypewriterProps): JSX.Element;
