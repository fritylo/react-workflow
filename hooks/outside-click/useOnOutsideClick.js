function checkIsOutsideClick(ref, e) {
   return ref.current && !ref.current.contains(e.target);
}

export function useOnOutsideClick(refs, onOutsideClick) {
   let handler;

   useEffect(() => {
      document.addEventListener("click", handler = e => {
         if (refs.every(ref => checkIsOutsideClick(ref, e)))
            onOutsideClick(e);
      });

      return () => document.removeEventListener("click", handler);
   }, [...refs]);
}