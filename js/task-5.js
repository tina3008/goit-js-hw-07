function getRandomHexColor() { 
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;    
}

const btn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color')
const body = document.querySelector('body')


const chngColor = (event) =>{
 
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor(); 
  
}

btn.addEventListener("click", chngColor);

