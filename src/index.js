import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


let greeting = '';
const cssStyle={  
};

let curDate = new Date();
curDate=curDate.getHours();
if(curDate >=1 && curDate<12){
 greeting='Good Morning';
 cssStyle.color='green';
}
else if(curDate>12 && curDate<19){
  greeting='Good Afternoon';
  cssStyle.color='orange';
}
else{
  greeting='Good Night';
  cssStyle.color='black';
}

ReactDom.render(
  <React.Fragment>
 
 <div>
<h1 className="chan">Hello sir, <span style={cssStyle}>{greeting}</span></h1></div>

  </React.Fragment>,
  document.getElementById('root')
);
