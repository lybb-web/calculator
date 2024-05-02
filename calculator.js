



const display = document.querySelector("#display")


const num = document.querySelector("#digits");
num.addEventListener("click", (e) =>
{
    console.log(e.target);
    console.log(e.target.textContent);
    if (!isNaN(e.target.textContent))
    {
        display.textContent += e.target.textContent;
    }
});


console.log("h");