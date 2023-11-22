let input = document.getElementById("input")
let buttons = document.querySelectorAll(".click");
let clearInput = document.querySelector(".btns div");
let equalBtn = document.querySelector(".equal")
let removeFromLast = document.querySelector(".removeFromLast");
let result = document.getElementById("calc-result");
let tone = new Audio('tone.wav');
// On Any key press
function onkeypress(elem){
  input.innerHTML+=elem.innerHTML;

  // this line is for calculation
  let mathExpression = input.innerHTML;
  result.innerHTML = eval(mathExpression);

}
buttons.forEach((elem)=>{
    elem.addEventListener("click",()=>{
      tone.play();
        onkeypress(elem);// here I am calling function on click
    });
});

//onClick on clear button input area will be clean
clearInput.addEventListener("click",()=>{
  input.innerHTML="";
  result.innerHTML="";
})

// this event remove last charactor from input string
removeFromLast.addEventListener("click",()=>{
    let a = (input.innerHTML).slice(0,-1);
    input.innerHTML=a;
    result.innerHTML=""
})
