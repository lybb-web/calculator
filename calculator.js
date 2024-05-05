

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
            if (!isNaN(operands[operands.length - 1]))
            {
                console.log("It's a number!");
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
        console.log(operands);
    });
 
    const opr = document.querySelector("#right-buttons");
    opr.addEventListener("click", (e) =>
    {
        const op = e.target.textContent;
        if (op != "=")
        {

            if (op == "-" && operands.length == 0 )
            {
                display.textContent += op;
                operands.push(op);
            }
            
        }
    });

    


}

function addToOperands(text)
{

}

// function parseString(displayed)
// {
//     console.log(displayed);
//     return displayed.split(/[+\-*\/]/);
// }
