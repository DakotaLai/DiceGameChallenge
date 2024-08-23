function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}



var count1 = 0;
var count2 = 0;
var randomNumber1, randomNumber2;
var dice1 = document.getElementsByClassName('img1')[0];
var dice2 = document.getElementsByClassName('img2')[0];
var title = document.getElementsByTagName("h1")[0];
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
btn1.addEventListener('click', function (e) {
    randomNumber1 = getRandomInt(1, 7);
    dice1.src = "./images/dice" + randomNumber1 + ".png";
    count1++;
    if (count1 === count2) {
        evalResult(randomNumber1, randomNumber2);
    }
});
btn2.addEventListener('click', function (e) {
    randomNumber2 = getRandomInt(1, 7);
    dice2.src = "./images/dice" + randomNumber2 + ".png";
    count2++;
    if (count1 === count2) {
        evalResult(randomNumber1, randomNumber2);
    }
});


var message = ["🚩 Play 1 Wins!", "🚩 Play 2 Wins!", "draw"];
function evalResult(random1, random2){
    if (random1 > random2) {
        title.innerHTML = message[0];
    
    } else if (random1 < random2) {
        title.innerHTML = message[1];
    
    } else {
        title.innerHTML = message[2];
    }
}

