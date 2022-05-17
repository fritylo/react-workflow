import { useEffect, useRef } from "react";

function checkIsOutsideClick(ref, e) {
   return ref.current && !ref.current.contains(e.target);
}

export function useOnOutsideClick(refs, onOutsideClick) {
   let handler = useRef();

   useEffect(() => {
      document.addEventListener("click", handler.current = (e) => {
         if (refs.every(ref => checkIsOutsideClick(ref, e)))
            onOutsideClick(e);
      });

      return () => document.removeEventListener("click", handler.current);
   }, [...refs]);
}
