const textLove = document.getElementById("text");
const textLove1 = document.getElementById("text1");
const textLove2 = document.getElementById("text2");

textLove.innerHTML =  String.fromCharCode(9617)
textLove1.innerHTML =  String.fromCharCode(9617)
textLove2.innerHTML =  String.fromCharCode(9617)
function moveRandomNess ( ){
  var a =Math.random() < 0.5;
  var b =Math.random() > 0.5;
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
function moveRandomNess1 ( ){
  var a =Math.random() < 0.5;
  var b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textlove1.x["animVal"][0].value +5
      textlove1.style.x = valueXIncrease;
      textlove1.setAttribute("x" , valueXIncrease);
      textlove1.innerHTML = String.fromCharCode(9617)
    }else{
      let valueXIncrease = textlove1.x["animVal"][0].value -5;
      textlove1.style.x = valueXIncrease;
      textlove1.setAttribute("x" , valueXIncrease);
      textlove1.innerHTML = String.fromCharCode(9618)
    }
  }else{
    if(b){
      let valueXIncrease = textlove1.y["animVal"][0].value +5
      textlove1.style.y = valueXIncrease;
      textlove1.setAttribute("y" , valueXIncrease);
      textlove1.innerHTML = String.fromCharCode(9619)
    }else{
      let valueXIncrease = textlove1.y["animVal"][0].value -5
      textlove1.style.y = valueXIncrease;
      textlove1.setAttribute("y" , valueXIncrease);
      textlove1.innerHTML = String.fromCharCode(9620)
    }
  }
}
function moveRandomNess2 ( ){
  var a =Math.random() < 0.5;
  var b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove2.x["animVal"][0].value +5
      textlove2.style.x = valueXIncrease;
      textlove2.setAttribute("x" , valueXIncrease);
      textlove2.innerHTML = String.fromCharCode(9617)
    }else{
      let valueXIncrease = textlove2.x["animVal"][0].value -5;
      textlove2.style.x = valueXIncrease;
      textlove2.setAttribute("x" , valueXIncrease);
      textlove2.innerHTML = String.fromCharCode(9618)
    }
  }else{
    if(b){
      let valueXIncrease = textlove2.y["animVal"][0].value +5
      textlove2.style.y = valueXIncrease;
      textlove2.setAttribute("y" , valueXIncrease);
      textlove2.innerHTML = String.fromCharCode(9619)
    }else{
      let valueXIncrease = textlove2.y["animVal"][0].value -5
      textlove2.style.y = valueXIncrease;
      textlove2.setAttribute("y" , valueXIncrease);
      textlove2.innerHTML = String.fromCharCode(9620)
    }
  }
}
setInterval(moveRandomNess , 10)
setInterval(moveRandomNess1 , 10)
setInterval(moveRandomNess2 , 10)

