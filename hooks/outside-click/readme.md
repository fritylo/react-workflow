# \[Hook] On Outside Click

## For what
Handle click outside of react component(s).

## Use case

```jsx
import { useRef } from 'react';
import { useOnOutsideClick } from './useOnOutsideClick.js';

export function SomeComponent(props) {
   const divRef = useRef();
   const spanRef = useRef();

   // do something on outside click
   useOnOutsideClick([divRef, spanRef], e => {
      console.log('you clicked outside of div and span');
   });

   return (
      <div ref={divRef}>
      </div>
      <span ref={spanRef}></span>
   );
}
```