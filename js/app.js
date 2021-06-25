/*-------------------------------- Constants --------------------------------*/
const wordsArr = ["PARTY","PARTYPANTS","PARTYHAT","PARTYSHOES","PARTYSOCKS","PARTYUNDIES","PARTYSHIRT","PARTYDOWN"]
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
/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener("click", handleClick)

/*-------------------------------- Functions --------------------------------*/

init()

function init(){
    rndmIdxGen()
	scrambler()
	fillWordTiles()
}

function rndmIdxGen(){
    rndmNumIdx = Math.floor(Math.random()*wordsArr.length)
}

function scrambler(){
    chosenWord = wordsArr[rndmNumIdx]
    wordLength = chosenWord.length
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
        let guessWord = guessArr.join('')
        if(guessWord === chosenWord){
            console.log("WINNER!!!")
        }else{
            console.log("LOSER!!!")
        }
    }
}

function revealAns(){
    document.getElementById('theWord').innerHTML=chosenWord
}