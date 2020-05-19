import React from 'react';
import ReactDom from 'react-dom';
// import youtuber , { pro,aloo,myNames} from './App';
import * as ques from "./App";

ReactDom.render(
  <>
  <ol>
    <li>Chandan</li>
    <li>{ques.youtuber}</li>
    <li>{ques.pro}</li>
    <li>{ques.aloo}</li> 
    <li>{ques.myNames()}</li>
  </ol>
  </>,
  document.getElementById('root')
  );