/*-------------------------------- Constants --------------------------------*/
const wordsArr = ["PARTY","PARTYPANTS","PARTYHAT","PARTYSHOES","PARTYSOCKS","PARTYUNDIES","PARTYSHIRT","PARTYDOWN"]
let lettersArr = []
let rndmNumIdx;
let chosenWord;
let scrambledWord;

/*------------------------ Cached Element References ------------------------*/
const board = document.getElementById('board')
const unscrambled = document.getElementById('assemble')
const word = document.getElementById('theWord')
/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/

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

