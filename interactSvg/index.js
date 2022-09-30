const textLove = document.getElementById("text");
textLove.innerHTML =  '➞'
function moveRandomNess ( ){
  let a =Math.random() < 0.5;
  let b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove.x["animVal"][0].value +5
      textLove.style.x = valueXIncrease;
      textLove.setAttribute("x" , valueXIncrease);
      textLove.innerHTML = '➞'
    }else{
      let valueXIncrease = textLove.x["animVal"][0].value -5;
      textLove.style.x = valueXIncrease;
      textLove.setAttribute("x" , valueXIncrease);
      textLove.innerHTML = '⬅'
    }
  }else{
    if(b){
      let valueXIncrease = textLove.y["animVal"][0].value +5
      textLove.style.y = valueXIncrease;
      textLove.setAttribute("y" , valueXIncrease);
      textLove.innerHTML = '⬆'
    }else{
      let valueXIncrease = textLove.y["animVal"][0].value -5
      textLove.style.y = valueXIncrease;
      textLove.setAttribute("y" , valueXIncrease);
      textLove.innerHTML = '⬇'
    }
  }
}
setInterval(moveRandomNess , 100)

const textLove1 = document.getElementById("text1");
textLove1.innerHTML =  '➞'
function moveRandomNess1 ( ){
  let a =Math.random() < 0.5;
  let b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove1.x["animVal"][0].value +5
      textLove1.style.x = valueXIncrease;
      textLove1.setAttribute("x" , valueXIncrease);
      textLove1.innerHTML = '➞'
    }else{
      let valueXIncrease = textLove1.x["animVal"][0].value -5;
      textLove1.style.x = valueXIncrease;
      textLove1.setAttribute("x" , valueXIncrease);
      textLove1.innerHTML = '⬅'
    }
  }else{
    if(b){
      let valueXIncrease = textLove1.y["animVal"][0].value +5
      textLove1.style.y = valueXIncrease;
      textLove1.setAttribute("y" , valueXIncrease);
      textLove1.innerHTML = '⬆'
    }else{
      let valueXIncrease = textLove1.y["animVal"][0].value -5
      textLove1.style.y = valueXIncrease;
      textLove1.setAttribute("y" , valueXIncrease);
      textLove1.innerHTML = '⬇'
    }
  }
}

setInterval(moveRandomNess1 , 100)


const textLove2 = document.getElementById("text2");
textLove2.innerHTML =  '➞'
function moveRandomNess2 ( ){
  let a =Math.random() < 0.5;
  let b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove2.x["animVal"][0].value +5
      textLove2.style.x = valueXIncrease;
      textLove2.setAttribute("x" , valueXIncrease);
      textLove2.innerHTML = '➞'
    }else{
      let valueXIncrease = textLove2.x["animVal"][0].value -5;
      textLove2.style.x = valueXIncrease;
      textLove2.setAttribute("x" , valueXIncrease);
      textLove2.innerHTML = '⬅'
    }
  }else{
    if(b){
      let valueXIncrease = textLove2.y["animVal"][0].value +5
      textLove2.style.y = valueXIncrease;
      textLove2.setAttribute("y" , valueXIncrease);
      textLove2.innerHTML = '⬆'
    }else{
      let valueXIncrease = textLove2.y["animVal"][0].value -5
      textLove2.style.y = valueXIncrease;
      textLove2.setAttribute("y" , valueXIncrease);
      textLove2.innerHTML = '⬇'
    }
  }
}

setInterval(moveRandomNess2 , 100)


const textLove3 = document.getElementById("text3");
textLove3.innerHTML =  '➞'
function moveRandomNess3 ( ){
  let a =Math.random() < 0.5;
  let b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove3.x["animVal"][0].value +5
      textLove3.style.x = valueXIncrease;
      textLove3.setAttribute("x" , valueXIncrease);
      textLove3.innerHTML = '➞'
    }else{
      let valueXIncrease = textLove3.x["animVal"][0].value -5;
      textLove3.style.x = valueXIncrease;
      textLove3.setAttribute("x" , valueXIncrease);
      textLove3.innerHTML = '⬅'
    }
  }else{
    if(b){
      let valueXIncrease = textLove3.y["animVal"][0].value +5
      textLove3.style.y = valueXIncrease;
      textLove3.setAttribute("y" , valueXIncrease);
      textLove3.innerHTML = '⬆'
    }else{
      let valueXIncrease = textLove3.y["animVal"][0].value -5
      textLove3.style.y = valueXIncrease;
      textLove3.setAttribute("y" , valueXIncrease);
      textLove3.innerHTML = '⬇'
    }
  }
}

setInterval(moveRandomNess3 , 100)


const textLove4 = document.getElementById("text4");
textLove4.innerHTML =  '➞'
function moveRandomNess4 ( ){
  let a =Math.random() < 0.5;
  let b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove4.x["animVal"][0].value +5
      textLove4.style.x = valueXIncrease;
      textLove4.setAttribute("x" , valueXIncrease);
      textLove4.innerHTML = '➞'
    }else{
      let valueXIncrease = textLove4.x["animVal"][0].value -5;
      textLove4.style.x = valueXIncrease;
      textLove4.setAttribute("x" , valueXIncrease);
      textLove4.innerHTML = '⬅'
    }
  }else{
    if(b){
      let valueXIncrease = textLove4.y["animVal"][0].value +5
      textLove4.style.y = valueXIncrease;
      textLove4.setAttribute("y" , valueXIncrease);
      textLove4.innerHTML = '⬆'
    }else{
      let valueXIncrease = textLove4.y["animVal"][0].value -5
      textLove4.style.y = valueXIncrease;
      textLove4.setAttribute("y" , valueXIncrease);
      textLove4.innerHTML = '⬇'
    }
  }
}

setInterval(moveRandomNess4 , 100)


const textLove5 = document.getElementById("text5");
textLove5.innerHTML =  '➞'
function moveRandomNess5 ( ){
  let a =Math.random() < 0.5;
  let b =Math.random() > 0.5;
  if(a){
    if(b){
      let valueXIncrease = textLove5.x["animVal"][0].value +5
      textLove5.style.x = valueXIncrease;
      textLove5.setAttribute("x" , valueXIncrease);
      textLove5.innerHTML = '➞'
    }else{
      let valueXIncrease = textLove5.x["animVal"][0].value -5;
      textLove5.style.x = valueXIncrease;
      textLove5.setAttribute("x" , valueXIncrease);
      textLove5.innerHTML = '⬅'
    }
  }else{
    if(b){
      let valueXIncrease = textLove5.y["animVal"][0].value +5
      textLove5.style.y = valueXIncrease;
      textLove5.setAttribute("y" , valueXIncrease);
      textLove5.innerHTML = '⬆'
    }else{
      let valueXIncrease = textLove5.y["animVal"][0].value -5
      textLove5.style.y = valueXIncrease;
      textLove5.setAttribute("y" , valueXIncrease);
      textLove5.innerHTML = '⬇'
    }
  }
}

setInterval(moveRandomNess5 , 100)


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




