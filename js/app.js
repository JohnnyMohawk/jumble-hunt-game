/*-------------------------------- Constants --------------------------------*/
window.reset=reset
window.restart=restart

import {
    levelOneWords,
    levelTwoWords,
    levelThreeWords,
    levelFourWords,
    levelFiveWords
} from "../data/words.js"

const colorScheme = {
    dark: "",
    change: function () {
        console.log(colorScheme.dark)
        colorScheme.dark = colorScheme.dark ? "" : "dark"
        document.querySelector("body").setAttribute("class", colorScheme.dark)
        document.getElementById("gameHeader").setAttribute("class", colorScheme.dark)
        document.getElementById("title").setAttribute("class", colorScheme.dark)
        document.getElementById("inGameText").setAttribute("class", colorScheme.dark)
        console.log(colorScheme.dark)
    }
}

const gameOverMsgArr = ["Game Over", "You Lose", "3 Strikes, Yer Out!", "Your're Done", "Nice Try. You Lose", "Maybe Next Time"]
const winGameMsgArr = ["You Win!!!", "Victory!!!", "Winner!!!", "You're the Champ!", "You Won!!!", "You Beat the Game!", "#WINNING"]
const correctMsgArr = ["That is Correct!", "Great Job!", "Wow! You're Good!", "Keep it Up!", "Impressive!", "WooHoo! Correct!", "BOOOOOOM!!!", "Great Shooting!", "AMAZEBALLS!", "OH YEAH!!!", "Genius!", "Fantastic", "Smarty Pants!", "WOWOWOWOW!!!", "You're on Fire!", "BOOMSHAKALAKA!", "Sharp Shooter!", "U R SMRT"]
const wrongMsgArr = ["Wrong..", "Terrible..", "Disappointing..", "No.. just no.", "Are you serious?", "FAIL", "Come on....", "Trainwreck..", "Sheesh...", "You can do better.", "Really?!?", "Are you trying?", "Nope..", "That's not it..", "Sorry, wrong.", "No siree Bob", "No way..", "Absolutely not.", "Danglawang.."]
let lettersArr = []
let guessArr = [] 
let rndmNumIdx;
let chosenWord;
let chosenMsg;
let scrambledWord;
let msgType;
let msgBckgrndImg;
let level = 1
let correct = 1
let attempts = 0
let score = 0
let cheats = 0
let click = 0


/*------------------------ Cached Element References ------------------------*/
const board = document.getElementById('board')
const unscrambled = document.getElementById('assemble')
const word = document.getElementById('theWord')
const levelDisplay = document.getElementById("level")
const scoreDisplay = document.getElementById("score")
const attemptsDisplay = document.getElementById("attempts")
const cheatsDisplay = document.getElementById("cheats")
const restartBtn = document.getElementById("restartBtn")
const cheatBtn = document.getElementById("cheatBtn")
const lightDarkBtn = document.querySelector("#light-dark-button")
const winLoseDisplay = document.getElementById("winLoseMsg")
const gunshot = new Audio("../audio/gunshot.wav")
const boo = new Audio("../audio/boo.wav")
const cheer = new Audio("../audio/cheer.wav")
const correctAudio = new Audio("../audio/correct.wav")
const wrongAudio = new Audio("../audio/wrong.wav")
/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener("click", handleClick)
restartBtn.addEventListener("click", restart)
cheatBtn.addEventListener("click", revealAns)
lightDarkBtn.addEventListener("click", colorScheme.change)
/*-------------------------------- Functions --------------------------------*/

checkUserColorSchemePreference()

init()

function init(){
    levelUp()
	scrambler()
	fillWordTiles()
}

function rndmWordGen(lvl){
    chosenWord = lvl[Math.floor(Math.random() * lvl.length)]
}

function rndmMsgGen(msg){
    chosenMsg = msg[Math.floor(Math.random() * msg.length)]
}

function scrambler(){
    lettersArr = chosenWord.toUpperCase().split("")
    let curIdx = lettersArr.length
    let tempVal
    let rndmIdx
    while (0 !== curIdx) {
        rndmIdx = Math.floor(Math.random() * curIdx)
        curIdx -= 1
        tempVal = lettersArr[curIdx]
        lettersArr[curIdx] = lettersArr[rndmIdx]
        lettersArr[rndmIdx] = tempVal
    }
    scrambledWord = lettersArr.join("")
}

function fillWordTiles(){
    lettersArr.forEach((letter, index) => {
        let div1 = document.createElement('div')
        div1.id="firstDiv" + index
        div1.className="scramLets"
        div1.innerHTML=letter
        div1.setAttribute("style", "width:90px")
        div1.style.textAlign = "center"
        div1.style.backgroundImage = "url(images/target.png)"
        div1.style.backgroundSize = "100%"
        div1.style.backgroundRepeat = "no-repeat"
        div1.style.backgroundPosition = "center"
        board.appendChild(div1)
        if(click === 0) div1.className = "animate__animated animate__backInRight"
    })
}

function fillGuessTiles(){
    guessArr.forEach((letter, index) => {
        let div2 = document.createElement('div')
        div2.id="secDiv" + index
        div2.className="scramLets"
        div2.innerHTML=letter
        div2.setAttribute("style", "width:46px")
        div2.style.textAlign = "center"
        div2.style.backgroundImage = "url(images/square_cloud.png)"
        div2.style.backgroundSize = "100%"
        div2.style.backgroundRepeat = "no-repeat"
        div2.style.backgroundPosition = "center"
        unscrambled.appendChild(div2)
        div2.className = "animate__animated animate__rotateIn"
    })
}

function handleClick(event){
    click += 1
    setTimeout(function(){
        board.innerHTML = ''
        fillWordTiles()
    }, 600)
    unscrambled.innerHTML = ''
    let index = parseInt(event.target.id.split('').pop())
    guessArr.push(lettersArr[index])
    let blah = document.getElementById(event.target.id)
    console.log(event.target.id)
    console.log(blah)
    blah.setAttribute("class", "animate__animated animate__zoomOutDown")
    lettersArr.splice(index, 1)
    crosshairBoom()
    checkGuess()
    fillGuessTiles()
}

function checkGuess(){
    if(lettersArr.length === 0){
        let guessWord = guessArr.join('')
        if(correct === 3){
            level += 1
            correct = 0
            click = 0
        }
        if(guessWord === chosenWord.toUpperCase()){
            correct += 1
            score += 1
            attempts = 0
            click = 0
            msgType = "correct"
            msgBckgrndImg = "url('../images/green-check.png')"
            updateStats()
            displayResults()
        }else{
            msgType = "wrong"
            msgBckgrndImg = "url('../images/red-x.png')"
            if(score > 0) score -= 1
            attempts += 1
            click = 0
            updateStats()
            displayResults()
        }
    }   
}

function updateStats(){
    scoreDisplay.innerHTML = score
    levelDisplay.innerHTML = level
    attemptsDisplay.innerHTML = attempts
    cheatsDisplay.innerHTML = cheats
}

function levelUp(){
    if(level === 1){
        rndmWordGen(levelOneWords)
    }else if(level === 2){
        rndmWordGen(levelTwoWords)
    }else if(level === 3){
        rndmWordGen(levelThreeWords)
    }else if(level === 4){
        rndmWordGen(levelFourWords)
    }else if(level === 5){
        rndmWordGen(levelFiveWords)
    }else{
        msgType = "win-game"
    }
}

function revealAns(){
    score = 0
    cheats += 1
    updateStats()
    document.getElementById('theWord').innerHTML = chosenWord.toUpperCase()
}

function setMessage(){
    if(msgType === "game-over"){
        rndmMsgGen(gameOverMsgArr)
    }else if(msgType === "win-game"){
        rndmMsgGen(winGameMsgArr)
    }else if(msgType === "correct"){
        rndmMsgGen(correctMsgArr)
    }else if(msgType === "wrong"){
        rndmMsgGen(wrongMsgArr)
    }
}

function displayResults(){
    let btnFunc;
    let btnMsg;
    if(attempts === 3){
        msgType = "game-over"
        msgBckgrndImg = "url('../images/target.png')"
        boo.play()
    }
    if(level === 6){
        msgType = "win-game"
        msgBckgrndImg = "url('../images/neon-star.png')"
        confetti.start(2500)
        cheer.play()
    }
    setMessage()
    if(msgType === "game-over"){
        btnFunc = "restart()"
        btnMsg = "New Game"
    }else if(msgType === "win-game"){
        btnFunc = "restart()"
        btnMsg = "New Game"
    }else if(msgType === "correct"){
        btnFunc = "reset()"
        btnMsg = "Continue to Next Word?"
        correctAudio.play()
    }else if(msgType === "wrong"){
        btnFunc = "reset()"
        btnMsg = "Continue to Next Word?"
        console.log(wrongAudio)
        wrongAudio.play()
    }
    winLoseDisplay.innerHTML =
    `<div id="msgAndBtn" style="background-image: ${msgBckgrndImg};">
        ${chosenMsg}
        <button id="nxtWrdBtn" onclick=${btnFunc}>${btnMsg}</button>
    </div>`
    winLoseDisplay.style.backgroundSize = "auto"
    winLoseDisplay.style.backgroundRepeat = "no-repeat"
    winLoseDisplay.style.backgroundPosition = "center"
    winLoseDisplay.style.visibility = "visible"
    winLoseDisplay.className = "animate__animated animate__zoomInDown"
}

function restart(){
    window.location.reload()
}

function reset(){
    winLoseDisplay.style.visibility = "hidden"
    guessArr = []
    unscrambled.innerHTML = ""
    word.innerHTML = ""
    board.innerHTML = ""
    levelUp()
    scrambler()
    fillWordTiles()
}

function crosshairBoom(){
    gunshot.play()
    document.body.style.cursor="url('../images/explosion.png'), auto"
    setTimeout(function(){
        document.body.style.cursor="url('../images/crosshair.png'), auto"
    },100)
}

function checkUserColorSchemePreference() {
    if(
        window.matchMedia("(prefers-color-scheme:dark)").matches &&
        !colorScheme.dark
    ){
        colorScheme.change()
    }
}
