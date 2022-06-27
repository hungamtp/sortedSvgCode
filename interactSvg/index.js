const text1 = document.getElementById('1');
const text2 = document.getElementById('2');
 
var color = "#272727";
var color1 = "#272727";
const clickIncrease = () => {
  if (text1.innerHTML > text2.innerHTML) {
    var temp = text1.innerHTML;
    text1.innerHTML = String.fromCharCode(text1.innerHTML.charCodeAt(0) + 1);
    text2.innerHTML = temp;
    color = "#" +(Number(color.split("#")[1]) +100);
    color1 = "#" +(Number(color1.split("#")[1]) -1);
    text1.style.fill = color;
    text2.style.fill = color;
  } else {
    var temp = text1.innerHTML;
    text1.innerHTML = String.fromCharCode(text1.innerHTML.charCodeAt(0) + 1);
    text2.innerHTML = temp;
    color = "#" +(Number(color.split("#")[1]) +100);
    color1 = "#" +(Number(color1.split("#")[1]) -1);
    text1.style.fill = color;
    text2.style.fill = color1;
    document.getElementById('2').style.color = "white"
 
  }
 
};
;
const text = document.getElementsByClassName("1");
const start = () =>{
  for (let i = 0; i < text.length; i++) {

      text[i].innerHTML = String.fromCharCode(text[i].innerHTML.charCodeAt(0) + 1);

 
  }
}

const numbers = document.getElementsByClassName("2");
const sort = () =>{
  for (let i = 0; i < numbers.length; i++) {
    for(let j = i+1; j < numbers.length; j++)
    if(Number(numbers[i].innerHTML) > Number(numbers[j].innerHTML)){
        var temp = numbers[i].innerHTML ;
        numbers[i].innerHTML = numbers[j].innerHTML;
        numbers[j].innerHTML = temp;
        break;
    }
  }
}
setInterval(clickIncrease,100);
setInterval(start,100);
setInterval(sort,1000);


