import React from 'react';
import ReactDom from 'react-dom';

const fname="Chandan";
const lname="Vishwakarma";
const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/300/300";
const img3="https://picsum.photos/400/300";
const img4="https://picsum.photos/500/300";
const img5="https://picsum.photos/600/300";

ReactDom.render(
  <React.Fragment>
    <h1 contentEditable="true">My name is {`${fname} ${lname}`}</h1>
    <p>Current Date is = {currdate}</p> 
    <p>Current Time is = {currtime}</p>    
    <img alt="RandomImages" src={img1}/>
    <img alt="RandomImages" src={img2}/>
    <img alt="RandomImages" src={img3}/>
    <img alt="RandomImages" src={img4}/>
    <img alt="RandomImages" src={img5}/>
  </React.Fragment>,
  document.getElementById('root')
);
