const textLove2 = document.getElementById("text2");
textLove2.innerHTML =  String.fromCharCode(9617)
function moveRandomNess1 ( ){
  let a =Math.random() < 0.5;
  let b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove2.x["animVal"][0].value +5
      textLove2.style.x = valueXIncrease;
      textLove2.setAttribute("x" , valueXIncrease);
      textLove2.innerHTML = String.fromCharCode(9617)
    }else{
      let valueXIncrease = textLove2.x["animVal"][0].value -5;
      textLove2.style.x = valueXIncrease;
      textLove2.setAttribute("x" , valueXIncrease);
      textLove2.innerHTML = String.fromCharCode(9618)
    }
  }else{
    if(b){
      let valueXIncrease = textLove2.y["animVal"][0].value +5
      textLove2.style.y = valueXIncrease;
      textLove2.setAttribute("y" , valueXIncrease);
      textLove2.innerHTML = String.fromCharCode(9619)
    }else{
      let valueXIncrease = textLove2.y["animVal"][0].value -5
      textLove2.style.y = valueXIncrease;
      textLove2.setAttribute("y" , valueXIncrease);
      textLove2.innerHTML = String.fromCharCode(9620)
    }
  }
}

setInterval(moveRandomNess1 , 100)


