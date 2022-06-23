import React, { useState, useEffect } from 'react';
import styles from './Typewriter.module.css';
const DEFAULT_MS = 30;
export default function Typewriter({ text, speed = DEFAULT_MS, loop = false, random = DEFAULT_MS, delay = DEFAULT_MS, cursor = true, onFinished = () => { }, onStart = () => { } }) {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    if (!Array.isArray(text))
        text = [text];
    useEffect(() => {
        setTimeout(() => {
            if (currentTextIndex === 0)
                onStart();
            if (currentTextIndex < text[currentStringIndex].length) {
                setCurrentTextIndex(currentTextIndex + 1);
            }
            else {
                if (currentStringIndex < text.length - 1) {
                    setTimeout(() => {
                        setCurrentTextIndex(0);
                        setCurrentStringIndex(currentStringIndex + 1);
                    }, delay);
                }
                else {
                    if (loop) {
                        setTimeout(() => {
                            setCurrentTextIndex(0);
                            setCurrentStringIndex(0);
                        }, delay);
                    }
                    else {
                        onFinished();
                    }
                }
            }
        }, speed + (Math.random() * random));
    });
    return (React.createElement("span", null,
        text[currentStringIndex].substring(0, currentTextIndex),
        React.createElement("span", { className: styles.cursor }, cursor && '▎')));
}
