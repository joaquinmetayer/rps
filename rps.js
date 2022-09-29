function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function election(play){
    let result = ""
    if(play == 1){
        result = "ROCK 🪨"
    } else if(play == 2){
        result = "PAPER 📄"
    } else if(play == 3){
        result = "SCISSORS ✂️"
    } else{
        result = "BAD 😵"
    }
    return result
}

let player = 0
let pc = 0
let wins = 0
let loss = 0

while(wins < 3 && loss < 3){
    pc = random(1,3)
    player = prompt("SELECT 1️⃣ FOR ROCK 🪨, 2️⃣ FOR PAPER 📄 OR 3️⃣ FOR SCISSORS ✂️")

    alert("💻 PC SELECT " + election(pc) + " AND  🥷🏻 YOU SELECT " + election(player))

    // combat
    if (pc == player) {
    alert("TIE! 🙃")
    } else if ((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)) {
    alert("WON! 😆")
    wins = wins + 1
    } else {
    alert("LOSER! 🥲")
    loss = loss + 1
    }
}

alert("😱 YOU WIN 😆 " + wins + " TIMES AND 🥲 LOST " + loss + " TIMES 👀")