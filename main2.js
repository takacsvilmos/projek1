import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});
let sanity = 100;

function startGame() {
    console.log("\x1b[31mWelcome to my adventure game about Archaeology in Hungary!\x1b[0m");
    console.log("\x1b[31mDo you want to be an archaeologist?\x1b[0m");
    
    const firstQuestion = prompt("yes or no?");
    
    if (firstQuestion.toLowerCase() === "yes") {
        console.log("Oh no! What have you gotten yourself into!");
        YouFool();
        sanity -= 30;
    } else if (firstQuestion.toLowerCase() === "no") {
        console.log("Good choice! Congratulations!");
        sanity += 30; 
        displayEnding();
    } else {
        console.log("Invalid choice, please try either yes or no!");
        startGame(); // Restart the game after an invalid choice
    } 
    console.log(`Your sanity points: ${sanity}`);
}

function YouFool() {
    console.log("\x1b[31mYou did it anyway. Now face the consequences!\x1b[0m");
    console.log("\x1b[31mYou have to go to the university. Are you studying or going for night outs?\x1b[0m");

    const secondQuestion = prompt("type 'study' or 'party' for answer");

    if (secondQuestion.toLowerCase() === "study"){
        console.log("Nice! Get a cookie smartass, your degree will be worth something!");
        sanity -= 30;
        lastQuestion();
    }
    else if(secondQuestion.toLowerCase() === "party"){
        console.log("You are a true archaeologist, welcome to our very special group of weird narcissistic alcoholics");
        sanity -= 50;
        lastQuestion();
    }
    else {
        console.log("Invalid choice, please try either 'study' or 'party'!");
        YouFool(); // Restart the question after an invalid choice
    }
    console.log(`Your sanity points: ${sanity}`);
}

function lastQuestion(){
    console.log("\x1b[31mThis is the last Question: What do you do after you get your degree?\x1b[0m");
    console.log("\x1b[31mStart working as an archaeologist or are you better than that?\x1b[0m");

    const lastQuestionResponse = prompt("type 'work' or 'sane' for the final score.");

    if (lastQuestionResponse.toLowerCase() === "work"){
        console.log("Awww honey! Did you think it would be different from university... you were right, it's worse!");
        sanity -= 100;
        displayEnding();
    }
    else if(lastQuestionResponse.toLowerCase() === "sane"){
        console.log("You are a true hero, and have common sense, great things waiting for you in life!");
        sanity += 500;
        displayEnding();
    }
    else {
        console.log("Invalid choice, please try either 'work' or 'sane'!");
        lastQuestion(); // Restart the question after an invalid choice
    }
    console.log(`Your sanity points: ${sanity}`);
}
function printSadFace() {
    console.log("                    ;;\\/;;;;;;;;");
    console.log("                   ;;;;;;;;;;;;;;;;");
    console.log("                ;;;;;;;;;;;;     ;;;;");
    console.log("               ;;;;;    ;;;         \\;;");
    console.log("              ;;;;;      ;;          |;");
    console.log("             ;;;;         ;          |");
    console.log("             ;;;                     |");
    console.log("              ;;                     )");
    console.log("               \\    ~~~~ ~~~~~~~    /");
    console.log("                \\    ~~~~~~~  ~~   /");
    console.log("              |\\ \\                / /|");
    console.log("               \\\\| %%%%%    %%%%% |//");
    console.log("              [[====================]]");
    console.log("               | |  ^          ^  |");
    console.log("               | | :@: |/  \\| :@: | |");
    console.log("                \\______/\\  /\\______/");
    console.log("                 |     (@\\/@)     |");
    console.log("                /                  \\");
    console.log("               /  ;-----\\  ______;  \\");
    console.log("               \\         \\/         /");
    console.log("                )                  (");
    console.log("               /                    \\");
    console.log("               \\__                  /");
    console.log("                \\_                _/");
    console.log("                 \\______/\\/\\______/");
    console.log("                  _|    /--\\    |_");
    console.log("                 /%%\\  /\"'\"'\\  /%%\\");
    console.log(" ______________/%%%%\\/\\'\"'\"'/\\/%%%%\\______________");
    console.log("/ :  :  :  /  .\\%%%%%%%\\\"'/%%%%%%%/.  \\  :  :  : \\");
    console.log(")  :  :  :  \\.  .\\%%%%%%/'\"\\%%%%%%/.  ./  :  :  :  (");
}

function displayEnding() {
    console.log("Game over! Here is your result based on your remaining sanity");
    console.log(`Your sanity points: ${sanity}`);
    if (sanity <= 0){
        console.log("You're going to the asylum!");
    } else if (sanity >= 150) {
        console.log("Congrats! You are the mentally strongest person that I know!");
    } else {
        console.log("Meh! Average");
    }

    restart();
}

function restart() {
    console.log("\x1b[31mCongrats! You finished the game!\x1b[0m");
    console.log("\x1b[31mDo you want to play again?\x1b[0m");
    
    const restartRequest = prompt("yes/no");

    if (restartRequest.toLowerCase() === "yes"){
        startGame();
    }
    else if(restartRequest.toLowerCase() === "no"){
        console.log("Sad but true, this game is not really original!");
        printSadFace(); // Call the function to print the sad face
        console.log("Goodbye!");
    }
    else {
        console.log("Invalid choice, please try either 'yes' or 'no'!");
        restart(); // Restart the question after an invalid choice
    }
}
startGame()
// Your existing code...
