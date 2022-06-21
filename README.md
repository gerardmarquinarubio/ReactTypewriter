# How to use Typewriter component

```tsx
import Typewriter from 'reacttypewriter';

export default function myComponent() {
    return (
        <h1>
            <Typewriter text='Hello' />
        </h1>
    )
}
```

```tsx
import Typewriter from 'reacttypewriter';

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