// http://www.bogolubow.com/pseudo-elementy-before-after-javascript.html

// computing height of the window screen and place hexagon in the middle of the section gallery 

let height = window.innerHeight;
let width = window.innerWidth;
let ratio = width/height;
const hex = document.querySelector('.hexagon-bg-2');
const base = 709;

const checkScreenHeight = ()=> {
  if(ratio <  1.3 || width=== 1280 && height === 950) {
    changeTopValue();
  } else return;
}

const changeTopValue = ()=> {  
    
    let difference = height - base;
    let percentage = (difference * 100)/ base;
    let result = (100 - percentage * 1.25) * -1;

    const style = hex.appendChild(document.createElement("style"));
    style.innerHTML = `.hexagon-bg-2::before {top:${result}%}`;
  
}
checkScreenHeight();
