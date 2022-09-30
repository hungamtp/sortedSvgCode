const textLove6 = document.getElementById("text6");
textLove6.innerHTML =  '➞'
function moveRandomNess6 ( ){
  let a =Math.random() < 0.5;
  let b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove6.x["animVal"][0].value +5
      textLove6.style.x = valueXIncrease;
      textLove6.setAttribute("x" , valueXIncrease);
      textLove6.innerHTML = '➞'
    }else{
      let valueXIncrease = textLove6.x["animVal"][0].value -5;
      textLove6.style.x = valueXIncrease;
      textLove6.setAttribute("x" , valueXIncrease);
      textLove6.innerHTML = '⬅'
    }
  }else{
    if(b){
      let valueXIncrease = textLove6.y["animVal"][0].value +5
      textLove6.style.y = valueXIncrease;
      textLove6.setAttribute("y" , valueXIncrease);
      textLove6.innerHTML = '⬆'
    }else{
      let valueXIncrease = textLove6.y["animVal"][0].value -5
      textLove6.style.y = valueXIncrease;
      textLove6.setAttribute("y" , valueXIncrease);
      textLove6.innerHTML = '⬇'
    }
  }
}

setInterval(moveRandomNess6 , 100)


