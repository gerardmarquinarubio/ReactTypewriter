"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Typewriter_module_css_1 = __importDefault(require("./Typewriter.module.css"));
const DEFAULT_MS = 30;
function Typewriter({ text, speed = DEFAULT_MS, loop = false, random = DEFAULT_MS, delay = DEFAULT_MS, cursor = true }) {
    const [currentStringIndex, setCurrentStringIndex] = (0, react_1.useState)(0);
    const [currentTextIndex, setCurrentTextIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            if (Array.isArray(text)) {
                // if text is an array
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
                    }
                }
            }
            else {
                // if text is string
                if (currentTextIndex < text.length) {
                    setCurrentTextIndex(currentTextIndex + 1);
                }
                else {
                    if (loop) {
                        setTimeout(() => {
                            setCurrentTextIndex(0);
                        }, delay);
                    }
                }
            }
        }, speed + (Math.random() * random));
    });
    if (Array.isArray(text))
        return (<span>
                {text[currentStringIndex].substring(0, currentTextIndex)}
                <span className={Typewriter_module_css_1.default.cursor}>
                {cursor && '▎'}
                </span>
            </span>);
    else
        return (<span>
                {text.substring(0, currentTextIndex)}
                <span className={Typewriter_module_css_1.default.cursor}>
                {cursor && '▎'}
                </span>
            </span>);
}
exports.default = Typewriter;
