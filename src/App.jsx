import React from 'react';
import './index.css';
import SlotM from './SlotM';

const App=()=>{
    return (<>
        <h1 className="heading_style">🎰 Welcome to <span>Slot Machine </span>🎰</h1>
        <div className='slotMachine'> 
        <SlotM x='🍊' y='😄' z='🎅'/>
        <hr/>
        <SlotM x='😄' y='😄' z='😄'/>
        <hr/>
        <SlotM x='🍌' y=' 🍎 ' z='🎅'/>
        <hr/>
        <SlotM x='🐈' y='🐈' z='🐈'/>
        </div>
       

    </>)

}

export default App;