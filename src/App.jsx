import React, { useState } from 'react';



const App=()=>{
     
//  let state=useState();
let [count,setCount]=useState(0);

    const IncNum=()=>{     
        setCount(count + 1);           
    };
    
return(
    <>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button>
    </>
);
}
export default App;