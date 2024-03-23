import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter Your First Number", type: "number", name: "firstNumber" },
  {
    message: "Enter Your SecondNumber",
    type: "number",
    name: "secondNumber",
  },

  {
    message:
      "select any three of the following operators to perform an operation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "multiplication", "devision"],
  },
]);

if(answer.Operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}

else if(answer.Operator === "Subtraction"){
  console.log(answer.firstNumber - answer.secondNumber);
}

else if(answer.Operator === "multiplication"){
  console.log(answer.firstNumber * answer.secondNumber)
}

else if(answer.Operator === "devision"){
  console.log(answer.firstNumber / answer.secondNumber)
}