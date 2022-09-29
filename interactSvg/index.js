const textLove = document.getElementById("text");

textLove.innerHTML =  String.fromCharCode(9617)
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
setInterval(moveRandomNess , 100)

// const textLove = document.getElementById("text");
// let increase = true;
// 

// function increaseX ( ){
//    ;
//   
//  ;
//   if(valueXIncrease == 100){
//     clearInterval(intervalIncreaseX);
//     intervalY = setInterval(increaseY , 10);
//     increase = false;
//   }
// }

// function decreaseX ( ){
//   let valueXIncrease = Number( textLove.style.x) -1 ;
//   textLove.style.x = valueXIncrease;
//   textLove.setAttribute("x" , valueXIncrease);
//   if(valueXIncrease == 2){
//     clearInterval(intervalDecreaseX)
//     intervalY = setInterval(increaseY , 10);
//     increase = true;
//   }
// }
// function increaseY ( ){
//   let valueXIncrease = Number( textLove.style.y) +1 ;
//   textLove.style.y = valueXIncrease;
//   textLove.setAttribute("y" , valueXIncrease);
//   if(valueXIncrease == currentY +35){
//     currentY = valueXIncrease;
//     clearInterval(intervalY);
//     if(increase){
//       intervalIncreaseX = setInterval(increaseX , 10);
//     }else{
//       intervalDecreaseX = setInterval(decreaseX , 10);
//     }
    
//   }
// }
// var intervalIncreaseX = setInterval(increaseX , 10);
// var intervalY ;
// var intervalDecreaseX ;