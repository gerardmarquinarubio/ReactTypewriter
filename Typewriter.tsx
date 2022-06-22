import React, {useState, useEffect} from 'react';

import styles from './Typewriter.module.css';

const DEFAULT_MS = 30;

export interface ITypewriterProps {
    text: string | string[];
    speed?: number;
    loop?: boolean;
    random?: number;
    delay?: number;
    cursor?: boolean;
    onFinished?: Function;
    onStart?: Function;
}

export default function Typewriter({text, speed = DEFAULT_MS, loop = false, random = DEFAULT_MS, delay = DEFAULT_MS, cursor = true, onFinished = () => {}, onStart = () => {}}: ITypewriterProps) {
    
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect( () => {
        setTimeout( () => {
            if (Array.isArray(text)) {
                // if text is an array
                if (currentTextIndex < text[currentStringIndex].length) {
                    setCurrentTextIndex(currentTextIndex + 1);
                } else {
                    if (currentStringIndex < text.length-1) {
                        setTimeout( () => {
                            setCurrentTextIndex(0);
                            setCurrentStringIndex( currentStringIndex + 1);
                        }, delay);
                    } else {
                        if (loop) {
                            setTimeout( () => {
                                setCurrentTextIndex(0);
                                setCurrentStringIndex(0);
                            }, delay);
                        } else {
                            onFinished();
                        }
                    }
                }
            } else {
                // if text is string
                if (currentTextIndex < text.length) {
                    setCurrentTextIndex(currentTextIndex + 1);
                }
                else {
                    if (loop) {
                        setTimeout( () => {
                            setCurrentTextIndex(0)
                        }, delay);
                    } else {
                        onFinished();
                    }
                }
            }
            
        }, speed + (Math.random() * random));
    });

    if (Array.isArray(text))
        return (
            <span>
                {
                    text[currentStringIndex].substring(0, currentTextIndex)
                }
                <span className={styles.cursor}>
                {
                    cursor && '▎'
                }
                </span>
            </span>
        );
    else
        return (
            <span>
                {
                    text.substring(0, currentTextIndex)
                }
                <span className={styles.cursor}>
                {
                    cursor && '▎'
                }
                </span>
            </span>
        );
}