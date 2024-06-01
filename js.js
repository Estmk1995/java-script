let randomNumber = Math.floor(Math.random()*100) + 1;
let tries = 1;


const button = document.querySelector(".button");
const inputGuess = document.querySelector(".number");
const userGuesses = document.querySelector("#tries")
const result = document.querySelector("#result")
const highOrlow = document.querySelector("#highOrlow")

button.addEventListener("click", function(){
    let userGuess = Number(inputGuess.value)
    userGuesses.textContent += userGuess +" ";
    if(tries === 10){
        button.disabled = true;
        inputGuess.disabled = true;
        let resetButton = document.createElement("button");
        resetButton.textContent = "iniciar nuevo juego";
        document.body.appendChild(resetButton);
        resetButton.addEventListener("click", function(){
            highOrlow.textContent=''
            result.textContent=''
            userGuesses.textContent=''
            button.disabled=false
            inputGuess.disabled=false
            tries = 1;
            resetButton.parentNode.removeChild(resetButton);
        })

    }else{
        if(userGuess===randomNumber){
            result .textContent = "Felicidades, lo adivinaste";
            result.style.backgroundColor = "green";
            result.style.color = "white";
        }
        if(userGuess<randomNumber){
            result.textContent="incorrecto"
            result.style.backgroundColor ="red";
            result.style.color = "white";
            highOrlow.textContent = "numero ingresado muy bajo";
        }
        if(userGuess>randomNumber){
            result.textContent="incorrecto"
            result.style.backgroundColor ="red";
            result.style.color = "white";
            highOrlow.textContent = "numero ingresado muy alto";
        }
    }
    tries ++;
})