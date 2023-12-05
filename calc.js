// set the number buttons from the html into a variable
//set the operator buttons from the html files into a variable

// loop over the numbers and add an event listener to each button that deals with the click event

// loop over the operator button and add and event listner to each button that deals ith when thesea are clicked

let num1 = "";
let num2 = "";
let currentoperator = "";
let finalResultado = "";

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
   if(currentoperator !== "") { 
    num2 += event.target.innerHTML;
    document.getElementById("disp").innerText = num2;
   }
   else { 
    num1 += event.target.innerHTML;
    document.getElementById("disp").innerText = num1;
}
  });
});

const operators = document.querySelectorAll(".operator");

//function for final result gets parameters from number, only after first number knows what to do
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => { 
   currentoperator =  event.target.innerText;
  });
});

const calculate = () => { 
//calculate function - event lstr
//updating the html
const equaltrigger = document.querySelector(".equ")
  equaltrigger.addEventListener("click", () => {
    let operand1 = parseFloat(num1);
    let operand2 = parseFloat(num2);

    switch (currentoperator) {

        case "*":
            finalResultado = operand1 * operand2;
            break;
        case "-":
            finalResultado = operand1 - operand2;
            break;
        case "+":
                finalResultado = operand1 + operand2;
                break;
        case "/":
             finalResultado = operand1 / operand2;
                    break;
     
      default:
        break;
    }
    console.log(finalResultado);
document.getElementById("disp").innerText = finalResultado;
 

num1 = "";
    num2 = "";
    currentOperator = "";
  });
};

calculate();
/* .result {finalResult;}
console.log(finalResult);
return finalResult; */
