


let random = Math.random( )
console.log(random)
let a = prompt("Enter the  First Number")
let c = prompt("Enter the opeartion")
let b = prompt("Enter the Second Number")

let obj = {
    "+":"-",
    "*":"+",
    "-": "/",
    "/":"**",
}

// They print right Result when random is greater then 0.1
if (random > 0.1)
{
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

// They print wrong Result when the random is less than  0.1 
else
{
    c = obj[c]
    alert(`The Main result is ${eval(`${a} ${c} ${b}`)}`)

}
