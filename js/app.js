/*-------------------------------- Constants --------------------------------*/
// const wordsArr = ["PARTY","PARTYPANTS","PARTYHAT","PARTYSHOES","PARTYSOCKS","PARTYUNDIES","PARTYSHIRT","PARTYDOWN"]
const levelOneWords = ["FOUR"]
const levelTwoWords = ["FIVES"]
const levelThreeWords = ["SIXESZ"]
const levelFourWords = ["SEVENSZ"]
const levelFiveWords = ["EIGHTSZS"]
const gameOverMsgArr = ["Game Over"]
const winGameMsgArr = ["You Win"]
const correctMsgArr = ["That is correct"]
const wrongMsgArr = ["Wrong"]
let lettersArr = []
let guessArr = []
let rndmNumIdx;
let chosenWord;
let chosenMsg;
let scrambledWord;
let msgType;
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
const winLoseDisplay = document.getElementById("winLoseMsg")
const gunshot = new Audio("../audio/gunshot.wav")
const boo = new Audio("../audio/boo.wav")
/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener("click", handleClick)
restartBtn.addEventListener("click", restart)
cheatBtn.addEventListener("click", revealAns)
/*-------------------------------- Functions --------------------------------*/

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
    lettersArr = chosenWord.split("")
    let curIdx = lettersArr.length
    let tempVal
    let rndmIdx
    console.log("word length:", curIdx)
    console.log("first:", lettersArr)
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
        div1 = document.createElement('div')
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
        div2 = document.createElement('div')
        div2.id="firstDiv" + index
        div2.className="scramLets"
        div2.innerHTML=letter
        div2.setAttribute("style", "width:50px")
        div2.style.textAlign = "center"
        div2.style.backgroundImage = "url(images/square_cloud.png)"
        div2.style.backgroundSize = "100%"
        div2.style.backgroundRepeat = "no-repeat"
        div2.style.backgroundPosition = "center"
        unscrambled.appendChild(div2)
        div2.className = "animate__animated animate__rotateIn"
    })
}

function handleClick(){
    click += 1
    board.innerHTML = ''
    unscrambled.innerHTML = ''
    index = parseInt(event.target.id.split('').pop())
    guessArr.push(lettersArr[index])
    lettersArr.splice(index, 1)
    crosshairBoom()
    checkGuess()
    fillGuessTiles()
    fillWordTiles()
}

// function checkGuess(){
//     if(lettersArr.length === 0){
//         if(correct === 3){
//             level += 1
//             correct = 0
//             click = 0
//         }
//         if(attempts === 3){
//             msgType = "game-over"
//             console.log("game over")
//             winLoseDisplay.style.visibility = "visible"
//             restart()
//         }
//         let guessWord = guessArr.join('')
//         if(guessWord === chosenWord){
//             correct += 1
//             score += 1
//             attempts = 0
//             click = 0
//             msgType = "correct"
//             winLoseDisplay.style.backgroundImage = "url(images/target.png"
//             winLoseDisplay.style.backgroundSize = "100%"
//             winLoseDisplay.style.backgroundRepeat = "no-repeat"
//             winLoseDisplay.style.backgroundPosition = "center"
//             winLoseDisplay.style.visibility = "visible"
//             reset()
//         }else{
//             console.log("LOSER!!!")
//             msgType = "wrong"
//             winLoseDisplay.style.visibility = "visible"
//             if(score > 0) score -= 1
//             attempts += 1
//             click = 0
//             reset()
//         }
//         updateStats()
//     }   
// }


function checkGuess(){
    if(lettersArr.length === 0){
        if(correct === 3){
            level += 1
            correct = 0
            click = 0
        }
        if(attempts === 3){
            msgType = "game-over"
            console.log("game over")
            // winLoseDisplay.style.visibility = "visible"
            // restart()
            displayResults()
        }
        let guessWord = guessArr.join('')
        if(guessWord === chosenWord){
            correct += 1
            score += 1
            attempts = 0
            click = 0
            msgType = "correct"
            displayResults()
            // reset()
        }else{
            console.log("LOSER!!!")
            msgType = "wrong"
            // winLoseDisplay.style.visibility = "visible"
            if(score > 0) score -= 1
            attempts += 1
            click = 0
            // reset()
            displayResults()
        }
        updateStats()
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
        console.log("you win the game")
        displayResults()
        // winLoseDisplay.style.visibility = "visible"
    }
}

function revealAns(){
    score = 0
    cheats += 1
    updateStats()
    document.getElementById('theWord').innerHTML = chosenWord
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
    setMessage()
    winLoseDisplay.innerText = chosenMsg
    winLoseDisplay.style.backgroundImage = "url(images/target.png"
    winLoseDisplay.style.backgroundSize = "100%"
    winLoseDisplay.style.backgroundRepeat = "no-repeat"
    winLoseDisplay.style.backgroundPosition = "center"
    winLoseDisplay.style.visibility = "visible"
}

function restart(){
    window.location.reload()
    // level = 1
    // correct = 0
    // attempts = 0
    // score = 0
    // cheats = 0
    // reset()
}

function reset(){
    // This is where the innerHTML used to be
    // winLoseDisplay.style.visibility = "hidden"
    // lettersArr = []
    // winLoseDisplay.style.visibility = "hidden"
    guessArr = []
    levelUp()
    scrambler()
    // fillWordTiles()
    // updateStats()
    // moving them here prevents double display, but now restart doesn't load new word
    unscrambled.innerHTML = ""
    word.innerHTML = ""
    board.innerHTML = ""
    // setTimeout(function(){
    //     testVisible()
    // }, 2000)
}

function crosshairBoom(){
    // toggles between crosshair cursor and displays flashbang cursor for 1/10th of a second on click.
    gunshot.play()
    document.body.style.cursor="url('../images/explosion.png'), auto"
    setTimeout(function(){
        document.body.style.cursor="url('../images/crosshair.png'), auto"
    },100)
}

function testVisible(){
    winLoseDisplay.style.visibility = "hidden"
}
