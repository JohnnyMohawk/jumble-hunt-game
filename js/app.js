/*-------------------------------- Constants --------------------------------*/
// const wordsArr = ["PARTY","PARTYPANTS","PARTYHAT","PARTYSHOES","PARTYSOCKS","PARTYUNDIES","PARTYSHIRT","PARTYDOWN"]
const colorScheme = {
    dark: "",
    change: function () {
        console.log(colorScheme.dark)
        colorScheme.dark = colorScheme.dark ? "" : "dark"
        document.querySelector("body").setAttribute("class", colorScheme.dark)
        console.log(colorScheme.dark)
    }
}

const levelOneWords = [
    "able",
    "aced",
    "acid",
    "ally",
    "also",
    "arcs",
    "area",
    "arch",
    "aunt",
    "axis",
    "baby",
    "back",
    "ball",
    "babe",
    "bass",
    "bell",
    "bets",
    "bind",
    "bios",
    "book",
    "cabs",
    "case",
    "chef",
    "curl",
    "chat",
    "chap",
    "chin",
    "chum",
    "chop",
    "coal",
    "dabs",
    "dame",
    "damp",
    "dart",
    "dash",
    "dark",
    "deck",
    "deep",
    "diva",
    "dice",
    "easy",
    "ends",
    "epic",
    "etch",
    "evil",
    "expo",
    "exam",
    "face",
    "fact",
    "fail",
    "fair",
    "fall",
    "farm",
    "fave",
    "fart",
    "gain",
    "gays",
    "gets",
    "germ",
    "glad",
    "hams",
    "hats",
    "haze",
    "help",
    "head",
    "hers",
    "hike",
    "jabs",
    "junk",
    "jury",
    "kept",
    "keys",
    "kilt",
    "kiss",
    "lads",
    "lamp",
    "lean",
    "less",
    "mark",
    "mile",
    "mine",
    "name",
    "nuns",
    "obit",
    "obey",
    "pack",
    "pane",
    "palm",
    "pals",
    "raid",
    "reek",
    "rift",
    "repo",
    "sees",
    "seem",
    "self",
    "slip",
    "thin",
    "tied",
    "toes",
    "tofu",
    "tree",
    "ugly",
    "unto",
    "used",
    "vans",
    "visa",
    "wack",
    "wade",
    "wait",
    "wasp",
    "yams",
    "yarn",
    "yoyo",
    "zest",
    "zero",
    "zinc",
    "zips",
    "zone",
    "zonk"
]
const levelTwoWords = [
    "abide",
    "about",
    "abort",
    "above",
    "adapt",
    "array",
    "aglow",
    "aisle",
    "angry",
    "ansty",
    "basic",
    "beers",
    "brisk",
    "bends",
    "berry",
    "below",
    "birdy",
    "blush",
    "bluff",
    "bolts",
    "cable",
    "champ",
    "chalk",
    "clams",
    "coded",
    "comet",
    "crack",
    "cycle",
    "daddy",
    "dance",
    "darts",
    "dated",
    "denim",
    "digit",
    "dingy",
    "dolly",
    "douse",
    "dryer",
    "duvet",
    "earth",
    "eased",
    "elope",
    "epoxy",
    "event",
    "exact",
    "equal",
    "fable",
    "fades",
    "false",
    "fever",
    "fiber",
    "fifty",
    "flaw",
    "flank",
    "froze",
    "fruit",
    "gamma",
    "gangs",
    "gawks",
    "gecko",
    "goofy",
    "goner",
    "guild",
    "hairy",
    "harem",
    "hedge",
    "hello",
    "helms",
    "honor",
    "image",
    "imply",
    "itchy",
    "issue",
    "ionic",
    "jacks",
    "japan",
    "jewel",
    "juice",
    "junky",
    "keeps",
    "kooky",
    "laced",
    "laces",
    "lamps",
    "laser",
    "leaky",
    "lynch",
    "mages",
    "mafia",
    "miles",
    "meats",
    "might",
    "mixer",
    "moths",
    "movie",
    "mushy",
    "named",
    "naval",
    "nears",
    "neigh",
    "newer",
    "nexus",
    "noise",
    "nooks",
    "north",
    "nutty",
    "ogres",
    "olive",
    "olive",
    "opens",
    "oxide",
    "owner",
    "paced",
    "palms",
    "pends",
    "pesky",
    "peppy",
    "petty",
    "phone",
    "phase",
    "porky",
    "pound",
    "pride",
    "print",
    "purse",
    "quack",
    "queen",
    "quart",
    "query",
    "quiet",
    "rafts",
    "rated",
    "react",
    "ready",
    "realm",
    "riced",
    "rides",
    "rigid",
    "rumor",
    "sadly",
    "safes",
    "saggy",
    "sails",
    "saint",
    "salsa",
    "sauce",
    "scone",
    "seeds",
    "scums",
    "sense",
    "shark",
    "sheds",
    "shout",
    "shove",
    "sides",
    "sixth",
    "skeet",
    "skill",
    "snots",
    "solid",
    "sound",
    "south",
    "spoil",
    "stall",
    "stole",
    "store",
    "sulks",
    "swamp",
    "sword",
    "syncs",
    "tempt",
    "texts",
    "texas",
    "today",
    "tonic",
    "topaz",
    "tried",
    "truth",
    "twigs",
    "typos",
    "udder",
    "unify",
    "using",
    "usual",
    "valid",
    "vapor",
    "venue",
    "vowel",
    "waked",
    "waist",
    "waxed",
    "whips",
    "whole",
    "wordy",
    "wreck",
    "yager",
    "yacht",
    "xenon",
    "yield",
    "yikes",
    "zincs",
    "zesty",
    "zones",
    "zincs",
    "zooms",
    "zeros",
    "yummy",
    "youth",
    "yogas",
    "yodle"
]
const levelThreeWords = [
    "aboard",
    "abduct",
    "active",
    "acutes",
    "adored",
    "aglets",
    "alaska",
    "alibis",
    "anonym",
    "arches",
    "awhile",
    "awoken",
    "babble",
    "badges",
    "bagels",
    "badman",
    "barbie",
    "bedbug",
    "before",
    "bigots",
    "boiler",
    "bomber",
    "brooms",
    "bureau",
    "burrow",
    "bylaws",
    "cabins",
    "cactus",
    "caddie",
    "caesar",
    "carpet",
    "carved",
    "center",
    "chasms",
    "chewed",
    "chorus",
    "circus",
    "clanky",
    "cocked",
    "condom",
    "corpse",
    "cosmic",
    "credit",
    "crimes",
    "cuffed",
    "cussed",
    "dammit",
    "darker",
    "debits",
    "decent",
    "debris",
    "defuze",
    "detest",
    "dimmer",
    "dissed",
    "donate",
    "dramas",
    "drifts",
    "earths",
    "echoes",
    "elicit",
    "eleven",
    "envoys",
    "enzyms",
    "estate",
    "faceup",
    "fables",
    "failed",
    "factor",
    "falcon",
    "famine",
    "fandom",
    "fecial",
    "feline",
    "fences",
    "fester",
    "finger",
    "fishes",
    "floppy",
    "frauds",
    "frosty",
    "gallon",
    "gambit",
    "garden",
    "gawker",
    "genres",
    "ghostly",
    "gifted",
    "glossy",
    "goodie",
    "grayed",
    "guilts",
    "hacker",
    "halves",
    "handle",
    "harems",
    "harden",
    "helmet",
    "homely",
    "humour",
    "hunted",
    "iconic",
    "iguana",
    "images",
    "impact",
    "invade",
    "ironic",
    "issued",
    "italic",
    "jacked",
    "jester",
    "jigsaw",
    "jiggly",
    "jockey",
    "juices",
    "jungle",
    "kayaks",
    "keypad",
    "kibble",
    "knifer",
    "kosher",
    "labour",
    "ladder",
    "ladies",
    "laired",
    "lamped",
    "leachy",
    "licker",
    "liquid",
    "lurker",
    "magics",
    "magots",
    "mallet",
    "mantis",
    "member",
    "mickey",
    "mildly",
    "moolah",
    "mullet",
    "myself",
    "nachos",
    "nerved",
    "nibble",
    "nickle",
    "nimble",
    "nitros",
    "nozzle",
    "nymphs",
    "nylons",
    "oblige",
    "offkey",
    "oddity",
    "online",
    "onside",
    "oodles",
    "orbits",
    "others",
    "owlish",
    "oyster",
    "paints",
    "pantry",
    "parish",
    "pastor",
    "pencil",
    "pepper",
    "phones",
    "picked",
    "plague",
    "prefer",
    "prompt",
    "python",
    "quacks",
    "quaint",
    "quoted",
    "rabbit",
    "racoon",
    "radish",
    "rarely",
    "ravish",
    "record",
    "refuel",
    "reflex",
    "resent",
    "richly",
    "rotate",
    "ruined",
    "sacked",
    "saliva",
    "salted",
    "sample",
    "sauced",
    "savage",
    "scheme",
    "scopes",
    "scruff",
    "search",
    "sensor",
    "shield",
    "shrimp",
    "slaved",
    "sludge",
    "somber",
    "splosh",
    "stench",
    "stocks",
    "stumps",
    "syrups",
    "tablet",
    "tangle",
    "tattoo",
    "tenses",
    "thwart",
    "toasts",
    "tomboy",
    "traced",
    "troves",
    "turban",
    "uglier",
    "unclog",
    "unpack",
    "upkeep",
    "upsets",
    "urchin",
    "utmost",
    "utopia",
    "vacant",
    "vacuum",
    "valued",
    "vector",
    "versal",
    "vexing",
    "virtue",
    "vogued",
    "vowels",
    "vortex",
    "waffle",
    "walrus",
    "weapon",
    "weirdo",
    "wicket",
    "worthy",
    "yanked",
    "yawned",
    "yellow",
    "youths",
    "zapped",
    "zeroes",
    "zested",
    "zoomed",
    "zygote"
]
const levelFourWords = [
    "abducts",
    "abolish",
    "account",
    "acronym",
    "adjures",
    "adopted",
    "agitate",
    "aidless",
    "alarmed",
    "alchohol",
    "alfredo",
    "alleged",
    "allergy",
    "allures",
    "amiable",
    "aminity",
    "analyst",
    "another",
    "anxious",
    "apricot",
    "arrived",
    "attacks",
    "autopsy",
    "awkward",
    "babbles",
    "backset",
    "banjoes",
    "bandits",
    "batched",
    "beacons",
    "bedpost",
    "bedsore",
    "belongs",
    "benches",
    "berserk",
    "bicolor",
    "bizarre",
    "blubbed",
    "bombers",
    "borrows",
    "bracers",
    "bricked",
    "brutish",
    "bulgers",
    "burrito",
    "bygones",
    "cabinet",
    "cahoots",
    "cameras",
    "canteen",
    "captive",
    "cartels",
    "cashbox",
    "cattish",
    "censors",
    "chaffer",
    "charter",
    "cheeses",
    "chromic",
    "clamped",
    "clunker",
    "collars",
    "compute",
    "consult",
    "corrupt",
    "creamed",
    "crystal",
    "cyclone",
    "daggers",
    "dangled",
    "daycare",
    "decoyed",
    "deduced",
    "dentist",
    "dilator",
    "discard",
    "dollars",
    "doweled",
    "drudged",
    "dwarves",
    "egoless",
    "elastic",
    "endurer",
    "enforce",
    "epilogs",
    "erupted",
    "evoking",
    "extinct",
    "fanatic",
    "ferrets",
    "fifteen",
    "flashes",
    "flushes",
    "footman",
    "fossils",
    "freedom",
    "frowned",
    "furrows",
    "gassers",
    "genders",
    "glimpse",
    "googled",
    "grayest",
    "grudged",
    "gymnast",
    "hagfish",
    "hammock",
    "hardily",
    "healthy",
    "herself",
    "hoarser",
    "hoisted",
    "horsing",
    "hunches",
    "icefall",
    "idolism",
    "illegal",
    "impeach",
    "implode",
    "indoors",
    "inkpots",
    "invades",
    "issuers",
    "jackets",
    "jaywalk",
    "kettles",
    "labeled",
    "mangled",
    "maximum",
    "nibbled"
]
const levelFiveWords = [
    "absolute",
    "adducted",
    "adhering",
    "analyzer",
    "antihero",
    "approved",
    "atonable",
    "babbling",
    "backpack",
    "balloons",
    "baptised",
    "barstool",
    "battiest",
    "bearskin",
    "beefcake",
    "beholder",
    "benefits",
    "bigfoots",
    "birdcage",
    "blasters",
    "bondsman",
    "breeched",
    "budworms",
    "buzzword",
    "cackling",
    "calciums",
    "callback",
    "capacity",
    "carjacks",
    "cartoons",
    "cementery",
    "censuses",
    "cerebal",
    "checkoff",
    "chewable",
    "chubbier",
    "churning",
    "cinnamon",
    "cloggers",
    "cocktail",
    "cogwheel",
    "collapse",
    "concaved",
    "corniest",
    "cowardly",
    "cropland",
    "cynicism",
    "darkness",
    "deadlift",
    "decorate",
    "defusing",
    "deposits",
    "detecter",
    "diasters",
    "dingdong",
    "discrete",
    "doorknob",
    "dreaming",
    "dyslexia",
    "eclipses",
    "employee",
    "enjoyers",
    "enthrall",
    "epilogue",
    "euphoria",
    "expected",
    "facility",
    "fantasia",
    "fawnlike",
    "feminist",
    "flamingo",
    "flowered",
    "fluorite",
    "folklore",
    "forested",
    "friendly",
    "funerals",
    "fuzziest",
    "galivant",
    "germiest",
    "gryphons",
    "haircuts",
    "hammocks",
    "haunting",
    "helmless",
    "hippiest",
    "hotlinks",
    "hysteric",
    "igniters",
    "implored",
    "insanity",
    "isolated",
    "jackpots",
    "journals",
    "kamikaze",
    "kinglike",
    "laborers",
    "landline",
    "laughter",
    "liftoffs",
    "locknuts",
    "luggages",
    "lynchers",
    "machetes",
    "mafiosos",
    "makeover",
    "markdown",
    "material",
    "mermaids",
    "midwifes",
    "ministers",
    "mislodge",
    "modifies",
    "moreover",
    "mulligan",
    "narrowed",
    "neatness",
    "nitrogen",
    "nuthouse",
    "offtrack",
    "ornament",
    "outcasts",
    "outranks",
    "owlishly",
    "pageboys",
    "pardoned",
    "pensions",
    "physical",
    "poaching",
    "promised",
    "quackier",
    "quibbler",
    "quotable",
    "rebounds",
    "refunded",
    "rustable",
    "sailorly",
    "sanitize",
    "scissors",
    "seagulls",
    "selloffs",
    "shavings",
    "shrimper",
    "slowdown",
    "soaplike",
    "syndrome",
    "tailwind",
    "tamponed",
    "thickish",
    "timeouts",
    "township",
    "triplets",
    "uglifier",
    "unbathed",
    "unearths",
    "unkingly",
    "upstarts",
    "vamooses",
    "vehicles",
    "vestless",
    "vomiting",
    "vouchers",
    "warnings",
    "washbowl",
    "welcomer",
    "woefully",
    "xeroxing",
    "yardwork",
    "yearbook",
    "yummiest",
    "zizzling",
    "zoologic",
    "zucchini",
    "zoneless",
    "zonetime",
    "zigzaggy",
    "zillions",
    "zippiest",
    "zappiest",
    "zippered"
]

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
const nextWordBtn = document.getElementById("nxtWrdBtn")
const lightDarkBtn = document.querySelector("#light-dark-button")
const winLoseDisplay = document.getElementById("winLoseMsg")
const gunshot = new Audio("../audio/gunshot.wav")
const boo = new Audio("../audio/boo.wav")
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
            updateStats()
            displayResults()
        }else{
            msgType = "wrong"
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
    }
    if(level === 6){
        msgType = "win-game"
    }
    setMessage()
    if(msgType === "game-over" || msgType === "win-game"){
        btnFunc = "restart()"
        btnMsg = "New Game"
    }else if(msgType === "correct" || msgType === "wrong"){
        btnFunc = "reset()"
        btnMsg = "Continue to Next Word?"
    }
    winLoseDisplay.innerHTML =
    `<div id="msgAndBtn">
        ${chosenMsg}
        <button id="nxtWrdBtn" onclick=${btnFunc}>${btnMsg}</button>
    </div>`
    winLoseDisplay.style.backgroundImage = "url(images/target.png"
    winLoseDisplay.style.backgroundSize = "auto"
    winLoseDisplay.style.backgroundRepeat = "no-repeat"
    winLoseDisplay.style.backgroundPosition = "center"
    winLoseDisplay.style.visibility = "visible"
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
    // toggles between crosshair cursor and displays flashbang cursor for 1/10th of a second on click while playing gunshot sound.
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
