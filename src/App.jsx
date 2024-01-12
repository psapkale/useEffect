import React, { useEffect, useMemo, useState } from 'react';

const App = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      console.log('Count is: ', count);

      return () => {
         console.log('I am cleaning up!');
      };
   }, [count]);

   return (
      <div>
         <h1>Count: {count}</h1>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
   );
};

export default App;
