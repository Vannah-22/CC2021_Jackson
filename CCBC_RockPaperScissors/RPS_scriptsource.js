// function Player1(move) {
//     if (move === "rock") {
//         return "it's a tie!"
//     }

//     else if (move === "paper") {
//         return "You win!"
//     }

//     else {
//         return "You Lose!"
//     }
// }
// console.log(Player1("rock"));

function Player1(move) {
    this.move = move;
}

function Player2(move) {
    this.move = move;
}


function Ref(Player1, Player2) {
    this.Player1 = Player1;
    this.Player2 = Player2;

    this.theCall = function(Player1, Player2) {
        if (Player1 === Player2) {
            return "It's a tie! Great Game!"
       }
       
       if (Player1 === "rock") {    
           if (Player2 === "scissors") {
               return "Player2 loses! Better luck next time!"
           }
           else (Player2 === "paper")
               return "Player2 wins! Congratulations!"
       }
   
       else if (Player1 === "paper") {
           if (Player2 === "scissors") {
               return "Player2 wins! Congratulations!"
           }
           else (Player2 === "rock")
               return "Player2 loses! Better luck next time!"
       }
    }
}

