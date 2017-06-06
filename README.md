# If.jsx [![Build Status](https://travis-ci.org/rogeriopvl/if.jsx.svg?branch=master)](https://travis-ci.org/rogeriopvl/if.jsx)

Simple if condition helper for JSX.

This module is an implementation of this tweet [this tweet][0]. It's highly recommended to read the whole thread, since you may find out that you don't actually need this module.

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

[0]: https://twitter.com/svensauleau/status/871825384223985672
