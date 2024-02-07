function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const txtInpt = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const ctrls = document.querySelector('#controls');


// const array = [];
let inptVal

create.addEventListener("click", () => {
  txtInpt.focus();
  if (txtInpt.value > 0 && txtInpt.value <101) {     
    createBoxes(txtInpt.value);
    txtInpt.value = '';
  }else{
    alert('Amount is not correct')    
  } 
  
});


// const divArray = [];
let boxsize
let newDiv 

destroy.addEventListener("click", () => {
  txtInpt.value = '';  
   const divArray = [];
   boxes.innerHTML = "";   
  //  divArray.length = 0;
  
 });

//  boxes.style.display = "inline-flex";

function createBoxes(amount){
  boxes.innerHTML = "";
  boxsize = 30;

  for (let i =1; i <= amount; i+=1 ) {   
    newDiv =`<div style= "width: ${boxsize} px; height: ${boxsize}px; background: ${getRandomHexColor()}; " /></div>`
  
    //  newDiv =`<div style= "padding-top: ${boxsize} px; padding-left: ${boxsize}px; background: ${getRandomHexColor()}; " /> </div>`
    
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  //  divArray.push(newDiv)

  };
  // boxes.insertAdjacentHTML("beforeend", divArray.join(''));
  // divArray.length=0;
}