const textLove = document.getElementById("text");



textLove.innerHTML =  String.fromCharCode(9617)


function moveRandomNess ( ){
  let a =Math.random() < 0.5;
  let b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove.x["animVal"][0].value +5
      textLove.style.x = valueXIncrease;
      textLove.setAttribute("x" , valueXIncrease);
      textLove.innerHTML = String.fromCharCode(9617)
    }else{
      let valueXIncrease = textLove.x["animVal"][0].value -5;
      textLove.style.x = valueXIncrease;
      textLove.setAttribute("x" , valueXIncrease);
      textLove.innerHTML = String.fromCharCode(9618)
    }
  }else{
    if(b){
      let valueXIncrease = textLove.y["animVal"][0].value +5
      textLove.style.y = valueXIncrease;
      textLove.setAttribute("y" , valueXIncrease);
      textLove.innerHTML = String.fromCharCode(9619)
    }else{
      let valueXIncrease = textLove.y["animVal"][0].value -5
      textLove.style.y = valueXIncrease;
      textLove.setAttribute("y" , valueXIncrease);
      textLove.innerHTML = String.fromCharCode(9620)
    }
  }
}
const textLove1 = document.getElementById("text1");
textLove1.innerHTML =  String.fromCharCode(9617)
function moveRandomNess1 ( ){
  let a =Math.random() < 0.5;
  let b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove1.x["animVal"][0].value +5
      textLove1.style.x = valueXIncrease;
      textLove1.setAttribute("x" , valueXIncrease);
      textLove1.innerHTML = String.fromCharCode(9617)
    }else{
      let valueXIncrease = textLove1.x["animVal"][0].value -5;
      textLove1.style.x = valueXIncrease;
      textLove1.setAttribute("x" , valueXIncrease);
      textLove1.innerHTML = String.fromCharCode(9618)
    }
  }else{
    if(b){
      let valueXIncrease = textLove1.y["animVal"][0].value +5
      textLove1.style.y = valueXIncrease;
      textLove1.setAttribute("y" , valueXIncrease);
      textLove1.innerHTML = String.fromCharCode(9619)
    }else{
      let valueXIncrease = textLove1.y["animVal"][0].value -5
      textLove1.style.y = valueXIncrease;
      textLove1.setAttribute("y" , valueXIncrease);
      textLove1.innerHTML = String.fromCharCode(9620)
    }
  }
}

setInterval(moveRandomNess , 100)
setInterval(moveRandomNess1 , 100)


