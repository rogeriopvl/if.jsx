# If.jsx

Simple if condition helper for JSX.

## Install

    npm install --dev if.jsx

## Usage

```jsx
import If from 'if.jsx'

// ...

return <div className='foobar'>
  {If(showHeader) (
    <h1>Header</h1>
  )}
  <div className='body'>body</div>
</div>
```

#### `If(condition)(children)`

- `condition`: any javascript expression
- `children`: react nodes to render

## License

MIT

