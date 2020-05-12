import React from 'react';
import ReactDom from 'react-dom';

const fname="Chandan";
const lname="Vishwakarma";
const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();

ReactDom.render(
  <React.Fragment>
    <h1>My name is {`${fname} ${lname}`}</h1>
    <p>Current Date is = {currdate}</p> 
    <p>Current Time is = {currtime}</p>    
  </React.Fragment>,
  document.getElementById('root')
);
