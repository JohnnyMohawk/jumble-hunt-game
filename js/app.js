/*-------------------------------- Constants --------------------------------*/
// const wordsArr = ["PARTY","PARTYPANTS","PARTYHAT","PARTYSHOES","PARTYSOCKS","PARTYUNDIES","PARTYSHIRT","PARTYDOWN"]
const levelOneWords = ["FOUR"]
const levelTwoWords = ["FIVES"]
const levelThreeWords = ["SIXESZ"]
const levelFourWords = ["SEVENSZ"]
const levelFiveWords = ["EIGHTSZS"]
let lettersArr = []
let guessArr = []
let rndmNumIdx;
let chosenWord;
let scrambledWord;
let level = 1
let correct = 0
let attempts = 0
let score = 0


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
/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener("click", handleClick)
restartBtn.addEventListener("click", restart)
cheatBtn.addEventListener("click", revealAns)
/*-------------------------------- Functions --------------------------------*/

init()

function init(){
    // rndmWordGen()
    levelUp()
	scrambler()
	fillWordTiles()
}

function rndmWordGen(lvl){
    chosenWord = lvl[Math.floor(Math.random() * lvl.length + 1) - 1]
}

// function rndmWordGen(){
//     chosenWord = level[Math.floor(Math.random() * level.length)]
// }

function scrambler(){
    // chosenWord = wordsArr[rndmNumIdx]
    // wordLength = chosenWord.length
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
    console.log(lettersArr)
    console.log(scrambledWord)

}

function fillWordTiles(){
    lettersArr.forEach((letter, index) => {
        div1 = document.createElement('div')
        div1.id="firstDiv" + index
        div1.classname="scramLets"
        div1.innerHTML=letter
        board.appendChild(div1)
    })
}

function fillGuessTiles(){
    guessArr.forEach((letter, index) => {
        div2 = document.createElement('div')
        div2.id="firstDiv" + index
        div2.classname="scramLets"
        div2.innerHTML=letter
        unscrambled.appendChild(div2)
    })
}

function clickCheck(){
    console.log(parseInt(event.target.id.split('').pop()))
}

function handleClick(){
    board.innerHTML = ''
    unscrambled.innerHTML = ''
    index = parseInt(event.target.id.split('').pop())
    guessArr.push(lettersArr[index])
    // console.log("Guess letters", guessArr)
    lettersArr.splice(index, 1)
    checkGuess()
    // console.log(lettersArr)
    fillWordTiles()
    fillGuessTiles()

}

function checkGuess(){
    if(lettersArr.length === 0){
        if(correct === 3){
            level += 1
            correct = 0
        }
        if(attempts === 3){
            console.log("game over")
            restart()
        }
        let guessWord = guessArr.join('')
        if(guessWord === chosenWord){
            correct += 1
            score += 1
            attempts = 0
            levelUp()
        }else{
            console.log("LOSER!!!")
            score -= 1
            attempts += 1
        }
        console.log("correct: ", correct, "score: ", score)
        // updateStats()
    }
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
        console.log("you win the game")
    }
}

function revealAns(){
    score = 0
    document.getElementById('theWord').innerHTML = chosenWord
}

function restart(){
    level = 1
    correct = 0
    attempts = 0
    score = 0
    unscrambled.innerHTML = ""
    word.innerHTML = ""
    board.innerHTML = ""
    lettersArr = []
    guessArr = []
    levelUp()
    console.log(lettersArr)
    scrambler()
    console.log(lettersArr)
    fillWordTiles()
}



