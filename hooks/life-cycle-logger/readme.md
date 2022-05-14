# \[Hook] Life Cycle Logger

## For what
Increase app performance, bug fixes.

## Use case

```jsx
import { useLifeCycleLogger } from './useLifeCycleLogger.js';

export function SomeComponent(props) {
   // now you will see life cycle events in console: mount, update, unmount
   useLifeCycleLogger('SomeComponent');

   return (
      <div></div>
   );
}
```

## Logger format
```
#{render-step} {component-name} - {event type}

where

render-step: int
component-name: string
event-type: 'Mount' | 'Update' | 'uNmount'
```

## Example of work

In browser developer console

```
#1 Child - Mount
#1 Parent - Mount
#2 Parent - uNmount
#2 Child - uNmount
```