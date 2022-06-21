# React Typewriter

![](https://img.shields.io/badge/-typescript-blue) 
![](https://img.shields.io/badge/react-v18.2-%2361DBFB)
![https://github.com/gerardmarquinarubio/ReactTypewriter/releases/tag/0.1.6](https://img.shields.io/badge/version-v0.1.6-green)
![https://www.npmjs.com/package/react-ts-typewriter](https://img.shields.io/badge/npm-published-red)

![](/usage.gif)
![](/usage.png)
*(Yes is at easy as that)*

React Typewriter is a simple component that allows you to create a nice "typewriter" effect to any text by simply invoking the component. [Take a look in NPM](https://www.npmjs.com/package/react-ts-typewriter).

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

```tsx
import Typewriter from 'react-ts-typewriter';

export default function myComponent() {
    return (
        <h1>
            <Typewriter 
            text={['Hello', 'how', 'are', 'you?']}
            delay={500}
            loop={false} 
            />
        </h1>
    )
}
```

## Props
> text : string | string[]

Text to display as string or an array of strings. **Required** 

> speed?: number = 30

How long (in ms) does the the typewriter wait after typing one character. *Defaults to 30ms*.

> loop?: boolean = false

Set to true if the typewriter should loop after finishing typing the word(s). *Defaults to false*.

> random?: number = 30

Ms of randomness that should be added after each keystroke. If set to zero then each stroke will strictly take <code>speed</code>ms to complete. *Defaults to 30ms*.

> delay?: number = 30

Ms to wait after compleating the word. Useless if loop is set to false or text is not an array. *Defaults to 30ms*.

> cursor?: boolean = true

Set to false if the typewriter should not render a blinking cursor character at the end of the string. *Defaults to true*