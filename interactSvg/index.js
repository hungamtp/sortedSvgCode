const textLove = document.getElementById("text");
const handleAnimation = () =>{
  let value =  Number(textLove.style.x) +1;
  textLove.style.x = value;
  textLove.setAttribute("x" , value);

  
}
setInterval(handleAnimation , 10)