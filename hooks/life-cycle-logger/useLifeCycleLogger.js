import { useEffect } from 'react';

const defaultComponentState = {
   renderCounter: 0,
   isMounted: false,
};

const state = {};

function takeState(componentName) {
   if (!(componentName in state))
      state[componentName] = { ...defaultComponentState };

   return state[componentName];
}

export function useLifeCycleLogger(componentName) {
   const state = takeState(componentName);

   useEffect(() => {
      state.renderCounter++;
      return () => state.renderCounter++;
   });

   useEffect(() => {
      if (state.isMounted)
         console.log(`  #${state.renderCounter} ${componentName} -%c Update`, 'color: lightgreen');

      return () => {
         if (state.isMounted) {
            console.log(`  #${state.renderCounter} ${componentName} -%c uNmount`, 'color: red');
            state.isMounted = false;
         }
      };
   });

   useEffect(() => {
      console.log(`  #${state.renderCounter} ${componentName} -%c Mount`, 'color: skyblue');
      state.isMounted = true;
   }, []);
}

