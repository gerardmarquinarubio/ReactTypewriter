import React, {useState, useEffect} from 'react';

import styles from './Typewriter.module.css';

const DEFAULT_MS = 30;

export interface ITypewriterProps {
    text: string | string[]; // text to display
    speed?: number; // speed at wich it will type
    loop?: boolean; // loop or not
    random?: number; // randomness to apply to each keystroke 0 = no randomness
    delay?: number; // delay in ms to wait after each text completion
    cursor?: boolean; 
}

export default function Typewriter({text, speed = DEFAULT_MS, loop = false, random = DEFAULT_MS, delay = DEFAULT_MS, cursor = true}: ITypewriterProps) {
    
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