let userScore = 0;
let compScore = 0;
const options = ["Rock", "Paper", "Scissor"];

var win = new Audio('./Music/win.mp3');
var loose = new Audio('./Music/Lose.mp3');

const choices = document.querySelectorAll(".option");
let userDisplay = document.querySelector("#user-score");
let compDisplay = document.querySelector("#comp-score");
let greatingDisplay = document.querySelector("#greating");

choices.forEach((elem) => {
    elem.addEventListener("click", () => {
        let userChoice = elem.getAttribute("id");
        
        let index = Math.floor(Math.random() * 3);
        let compChoice = options[index];

        if (((userChoice == "Paper") && (compChoice == "Rock")) || ((userChoice == "Rock") && (compChoice == "Scissor")) || ((userChoice == "Scissor") && (compChoice == "Paper"))) {
            userScore++
            userDisplay.innerHTML = userScore;
            win.play();
            greatingDisplay.innerHTML = "You Won 🎉. You " + userChoice + " Choose and Computer " + compChoice + " Choose";
            greatingDisplay.style.backgroundColor = "Green";
        }
        else if (((userChoice == "Rock") && (compChoice == "Paper")) || ((userChoice == "Paper") && (compChoice == "Scissor")) || ((userChoice == "Scissor") && (compChoice == "Rock"))) {
            compScore++;
            compDisplay.innerHTML = compScore;
            loose.play();
            greatingDisplay.innerHTML = "You Loose 🤦‍♂️. You " + userChoice + " Choose and Computer " + compChoice + " Choose";
            greatingDisplay.style.backgroundColor = "crimson";
        }
        
        else {
            console.log("Draw")
            greatingDisplay.innerHTML = "It's a Draw 😁. You " + userChoice + " Choose and Computer " + compChoice + " Choose";
            greatingDisplay.style.backgroundColor = "darkslateblue";
        }

    })
})