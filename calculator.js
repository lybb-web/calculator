

let operands = [];
populateDisplay();


function populateDisplay()
{
    const display = document.querySelector("#display")


    const num = document.querySelector("#digits");
    num.addEventListener("click", (e) =>
    {
        console.log(e.target);
        console.log(e.target.textContent);
        if (!isNaN(e.target.textContent))
        {
            
            display.textContent += e.target.textContent;
            if (!isNaN(operands[operands.length - 1])) //last element in operands is a number
            {
                operands[operands.length-1] += e.target.textContent;
            }
            else
            {
                operands.push(e.target.textContent);
            }
            
        }
        else if (e.target.textContent == "+/-")
        {
            
        }
        else if (e.target.textContent == ".")
        {

        }
        console.log(operands);
    });
 
    const opr = document.querySelector("#right-buttons");
    opr.addEventListener("click", (e) =>
    {
        const op = e.target.textContent;
        if (op != "=")
        {

            if (op == "-" && (operands.length == 0 || isNaN(operands[operands.length-1])))
            {
                display.textContent += op;
                operands.push(op);
            }
            else if (!isNaN(operands[operands.length - 1])) //add operator if last element in operands is a number
            {
                display.textContent += op;
                operands.push(op);
            }
            
        }
        else
        {
            checkNegativeSymbols();
            console.log(operands);
            if (checkOperands())
            {
                operate(operands[0], operands[1], operands[2]);
            }
            
        }
    });

    


}

function operate(addendOne, operator, addendTwo)
{
    numOne = Number(addendOne);
    numTwo = Number(addendTwo);
    switch (operator)
    {
        case "+":
            console.log(numOne + numTwo);
            break;
        case "-":
            console.log(numOne - numTwo);
            break;
        case "*":
            console.log(numOne * numTwo);
            break;
        case "/":
            console.log(numOne / numTwo);
            break;
    }
    if (operator == "+")
    {
        console.log(numOne + numTwo);
    }
}

function checkNegativeSymbols()
{
    if (operands.length > 3)
    {
        for (let i = 0; i < operands.length-1; i++)
        {
            if (operands[i] == "-" && operands[i+1])
            {
                operands[i] += operands[i+1];
                operands.splice(i+1, 1);
            }
            
        }
    }
}

function checkOperands()
{
    return (!isNaN(operands[0]) && !isNaN(operands[2]))
    
}

// function parseString(displayed)
// {
//     console.log(displayed);
//     return displayed.split(/[+\-*\/]/);
// }
