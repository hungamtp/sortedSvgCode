const textLove = document.getElementById("text");
let increase = true;
var currentY = Number(textLove.style.y);

function increaseX ( ){
  let valueXIncrease = Number( textLove.style.x) +1 ;
  textLove.style.x = valueXIncrease;
  textLove.setAttribute("x" , valueXIncrease);
  if(valueXIncrease == 100){
    clearInterval(intervalIncreaseX);
    intervalY = setInterval(increaseY , 10);
    increase = false;
  }
}

function decreaseX ( ){
  let valueXIncrease = Number( textLove.style.x) -1 ;
  textLove.style.x = valueXIncrease;
  textLove.setAttribute("x" , valueXIncrease);
  if(valueXIncrease == 2){
    clearInterval(intervalDecreaseX)
    intervalY = setInterval(increaseY , 10);
    increase = true;
  }
}
function increaseY ( ){
  let valueXIncrease = Number( textLove.style.y) +1 ;
  textLove.style.y = valueXIncrease;
  textLove.setAttribute("y" , valueXIncrease);
  if(valueXIncrease == currentY +35){
    currentY = valueXIncrease;
    clearInterval(intervalY);
    if(increase){
      intervalIncreaseX = setInterval(increaseX , 10);
    }else{
      intervalDecreaseX = setInterval(decreaseX , 10);
    }
    
  }
}
var intervalIncreaseX = setInterval(increaseX , 10);
var intervalY ;
var intervalDecreaseX ;