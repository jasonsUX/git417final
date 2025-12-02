let pHoodie = document.getElementById("hoodie");
let pPCase = document.getElementById("phonecase");
let bHat = document.getElementById("hat");
let tShirt = document.getElementById("shirt");
let pPoster = document.getElementById("poster");

let buttonZero = document.getElementById("b0");
let buttonOne = document.getElementById("b1");
let buttonTwo = document.getElementById("b2");
let buttonThree = document.getElementById("b3");
let buttonFour = document.getElementById("b4");

buttonZero.addEventListener("click", function(){
    pHoodie.classList.remove("hidden");
    bHat.classList.add("hidden");
    tShirt.classList.add("hidden");
    pPoster.classList.add("hidden");
    pPCase.classList.add("hidden");
})

buttonOne.addEventListener("click", function(){
    pHoodie.classList.add("hidden");
    bHat.classList.add("hidden");
    tShirt.classList.add("hidden");
    pPoster.classList.add("hidden");
    pPCase.classList.remove("hidden");
});

buttonTwo.addEventListener("click", function(){
    pHoodie.classList.add("hidden");
    bHat.classList.remove("hidden");
    tShirt.classList.add("hidden");
    pPoster.classList.add("hidden");
    pPCase.classList.add("hidden");
});

buttonThree.addEventListener("click", function(){
    pHoodie.classList.add("hidden");
    bHat.classList.add("hidden");
    tShirt.classList.remove("hidden");
    pPoster.classList.add("hidden");
    pPCase.classList.add("hidden");
});

buttonFour.addEventListener("click", function(){
    pHoodie.classList.add("hidden");
    bHat.classList.add("hidden");
    tShirt.classList.add("hidden");
    pPoster.classList.remove("hidden");
    pPCase.classList.add("hidden");
});


function randomNumGen(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gamePlay(e){
    e.preventDefault();

    let userGuess = document.getElementById("userGuess");

    let randomNum = document.getElementById("randomNum");

    let num = randomNumGen(1, 10);

    
    randomNum.innerHTML = "Computer guess was: " + num;

    let userInput = document.getElementById("guess");

    userGuess.innerHTML = "Your guess was: " + userInput.value;

    let gameResult = document.getElementById("gameMsg");

    if(userInput.value == num){
        gameResult.innerHTML = "Congratulations, you win!!!";
    }else{
        gameResult.innerHTML = "Unlucky, better luck next time!";

    if(isNaN(userInput.value) || userInput.value > 10 || userInput.value == ""){
        gameResult.innerHTML = "Please enter a number between 1-10";
        userGuess.classList.add("hidden");
        randomNum.classList.add("hidden");
    }else{
        userGuess.classList.remove("hidden");
        randomNum.classList.remove("hidden");
    }
} 
}

let gameBtn = document.getElementById("guessBtn").addEventListener("click", gamePlay);


let lightDrk = document.getElementById("lightDark");

let docBody = document.body;

let headerSvgBg = document.getElementById("svg-bg");

let navWords = document.querySelectorAll("nav a");

let productDesc = document.querySelectorAll("#productspace > p");

lightDrk.addEventListener("click", function(){
    docBody.classList.toggle("light");
    lightDrk.classList.toggle("light");
    headerSvgBg.classList.toggle("light");
    navWords.classList.toggle("light");
    productDesc.classList.toggle("productdescLight");
});

function validateForm(event){
    event.preventDefault();
}
