

let operands = [];
populateDisplay();


function populateDisplay()
{
    const display = document.querySelector("#display")


    const num = document.querySelector("#digits");
    num.addEventListener("click", (e) =>
    {
        
        if (!isNaN(e.target.textContent) || e.target.textContent == ".")
        {
            
            display.textContent += e.target.textContent;
            if (!isNaN(operands[operands.length - 1]) || operands[operands.length - 1] == ".") //last element in operands is a number
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
            console.log(operands);
            if (!isNaN(operands[operands.length - 1]) )
            {
                operands[operands.length - 1] = String(Number(operands[operands.length-1]) * -1);
                display.textContent = operands.join("");
            }
        }
        
        checkNegativeSymbols();
        
    });
 
    const opr = document.querySelector("#right-buttons");
    opr.addEventListener("click", (e) =>
    {
        const op = e.target.textContent;
        if (op != "=")
        {

            // checkNegativeSymbols();
            if (checkOperands())
            {
                
                let result = operate(operands[0], operands[1], operands[2]);
                display.textContent = result;
                operands.length = 1;
                operands[0] = String(result);
            }

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
            // checkNegativeSymbols();
            if (checkOperands())
            {
                
                let result = operate(operands[0], operands[1], operands[2]);
                display.textContent = result;
                operands.length = 1;
                operands[0] = String(result);
            }
            
        }
        checkNegativeSymbols();
    });

    const blueButtons = document.querySelector("#delete-operations");
    blueButtons.addEventListener("click", (e) =>
    {
        if (e.target.textContent == "AC")
        {
            display.textContent = "";
            operands.length = 0;
        }
        else if (e.target.textContent == "CE")
        {
            if (operands[operands.length - 1].length > 1)
            {
                operands[operands.length-1] = operands[operands.length-1].substring(0, operands[operands.length-1].length - 1)
            }
            else
            {
                operands.pop();
            }
            display.textContent = display.textContent.substring(0, display.textContent.length - 1);
        }
        else if (e.target.textContent = "%")
        {
            console.log(operands);
            if (operands.length == 1 && !isNaN(operands[0]))
            {
                display.textContent = String(Number(operands[0]) * 0.001);
                operands[0] = display.textContent;
            }
            else if (operands.length == 3 && !isNaN(operands[2]))
            {
                let percentage = (Number(operands[2]) * 0.01);
                let base = Number(operands[0]);
                let result;
                if (operands[1] != "*")
                {
                    result = operate(base, operands[1], percentage * base);
                    
                }
                else
                {
                    result = String(percentage * base);
                    
                }
                display.textContent = result;
                operands.length = 1;
                operands[0] = String(result);
                
                
                
            }
        }
    })

    

    


}

function operate(addendOne, operator, addendTwo)
{
    numOne = Number(addendOne);
    numTwo = Number(addendTwo);
    switch (operator)
    {
        case "+":
            return numOne + numTwo;
        case "-":
            return numOne - numTwo;
        case "*":
            return numOne * numTwo;
        case "/":
            return numOne / numTwo;
    }
    
}

function checkNegativeSymbols()
{
    if (operands.length > 3)
    {
        for (let i = 0; i < operands.length-1; i++)
        {
            if (operands[i] == "-" && !isNaN(operands[i+1]))
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

console.log("IS THIS A NUMBE????")
console.log(!isNaN(-9.));

// function parseString(displayed)
// {
//     console.log(displayed);
//     return displayed.split(/[+\-*\/]/);
// }
