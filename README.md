<h1 align="center"> 〰 ⌨️ 〰 React Typewriter 〰 ⌨️ 〰</h1>
<p align="center">
<img src="https://img.shields.io/badge/language-typescript-blue?style=flat-square&logo=typescript" /> 
<img src="https://img.shields.io/badge/react-v18.2-%2361DBFB?style=flat-square&logo=react" />
<a href="https://github.com/gerardmarquinarubio/ReactTypewriter/releases" target="_blank">
<img src="https://img.shields.io/badge/version-v0.1.8-green?style=flat-square" />
</a>
<a href="https://www.npmjs.com/package/react-ts-typewriter" target="_blank">
<img src="https://img.shields.io/badge/package-npm-red?style=flat-square&logo=npm" />
</a>
<a href="https://github.com/brillout/awesome-react-components#ui-animation" target="_blank">
<img src="https://img.shields.io/badge/featured-awesome--react--components-blueviolet?style=flat-square" />
</a>
<img src="./usage.gif" />
</p>
React Typewriter is a simple component that allows you to create a nice "typewriter" effect to any text by simply invoking the component. <a href="https://codesandbox.io/s/react-typewriter-example-mgyclf" target="_blank">Try on codesandbox.io</a>.

## Installation

```sh
npm i react-ts-typewriter
```

## Example usage

```tsx
import Typewriter from 'react-ts-typewriter';

export default function myComponent() {
    return (
        <h1>
            <Typewriter text='Hello' />
        </h1>
    )
}
```

## Props

<table border="1">
<thead>
    <tr><td><b>Prop name</b></td><td><b>Type</b></td><td><b>Description</b></td><td><b>Required</b></td><td><b>Default</b></td></tr>
</thead>
<tbody>
    <tr><td>text</td><td>string | string[]</td><td>Text to display as string or an array of strings</td><td>true</td><td></td></tr>
    <tr><td>speed</td><td>number</td><td>How long (in ms) does the the typewriter wait after typing one character</td><td>false</td><td>30ms</td></tr>
    <tr><td>loop</td><td>boolean</td><td>Set to true if the typewriter should loop after finishing typing the string(s)</td><td>false</td><td>false</td></tr>
    <tr><td>random</td><td>number</td><td>Ms of randomness that should be added after each keystroke. If set to zero then each stroke will strictly take <code>speed</code>ms to complete</td><td>false</td><td>30ms</td></tr>
    <tr><td>delay</td><td>number</td><td>Ms to wait after compleating the word. Useless if loop is set to false or text is not an array</td><td>false</td><td>30ms</td></tr>
    <tr><td>cursor</td><td>boolean</td><td>Set to false if the typewriter should not render a blinking cursor character at the end of the string</td><td>false</td><td>true</td></tr>
    <tr><td>onFinished</td><td>Function</td><td>Callback function after Typewriter animation is complete, never triggers if <code>loop</code> is true</td><td>false</td><td>() => void</td></tr>
    <tr><td>onStart</td><td>Function</td><td>Callback function before Typewriter animation is started on each string</td><td>false</td><td>() => void</td></tr>
</tbody>
</table>