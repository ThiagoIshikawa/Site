let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup",() => {
    console.log("Apertou no campo USD!")
})

brlInput.addEventListener("keyup", () => {
    console.log("Apertou no campo BRL!")
})



function cumprimentar(Oi, callback){
    console.log("Olá + nome");
    callback();
}
function depois(){
    console.log("Isso foi depois do oi")
}

cumprimentar("Thiago", depois);



