import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

let answer;
let answer2;
//nem kell neki érték itt mert a gameStart elején kap értéket
let money = 2000;
let hasBag = false;
let bag;
//ide nem kell a prompt mert a gameStart függvényben van bekérve
let name;

function noBagQuestion() {
  console.log("You didn't bring a bag, where do you go? Go right to the bar, or  go left to steal flowers from the Giftshop?");
  const firstBranch = prompt("left or right?");
  if (firstBranch === "left") {
    console.log("Nice idea! but the police was nearby, you got arrested!");
    money -= 5000;
    gameOver();

  }
  else if (firstBranch === "right")
    console.log("You run into your mother in law, you two have a few drinks, but you get sleepy. \n What do you do? Go home or get back to shopping?")
  else { "Invalid answer, please try again!" }
}

function gameStart() {
  console.log('Choose a nickname')
  name = prompt();
  do {
    money = 2000
    console.log(' Hey! ' + name + ' Winter is coming! Your mission to embark on a Christmas present-buying adventure for your family. Will you make the right choices and spread the magic of the season!')
    console.log('Bring a bag? yes/no')

    //itt le volt zárva a gameStart egy '}'-el, ezért nem működött a gameSTart függvény
    do {
      bag = prompt()
      if (bag === 'yes') {
        hasBag = true
      }
      else if (bag === "no") {
        hasBag = false
        noBagQuestion()
      }
      else { console.log("Invalid answer, try again!") }


      //} while (bag !== "yes" && bag !== "no")
    } while (bag !== "yes" && "no")
    do {
      console.log('What would you like to buy Choose a number between 1-3')
      if (hasBag === true) {
        console.log('1 candy')//5
        console.log('2 rolex')//2001
        console.log('3 book')//30
      }
      answer = prompt('Type in number: ')
    }
    while (answer !== '1' && answer !== '2' && answer !== '3')

    if (answer === '1') {
      money = money - 5

    } else if (answer === '2') {
      money = money - 2001
      console.log('U are spend all your money, u cant buy any gifts. \n Try Again!')
    } else if (answer === '3') {
      money = money - 300

    }
    console.log('Your money: ' + money + "$")
  } while (money < 0)

  do {
    console.log('U have to buy more gifts, so u went to the mall. what u choose?')
    if (hasBag === true) {
      console.log('1 Postcard')//5
      console.log('2 Gucci')//2001
      console.log('3 Flower')//30
    }
    else {
      console.log('1 Postcard')//2
    }
    answer = prompt('Type in number: ')
  }
  while (answer !== '1' && answer !== '2' && answer !== '3')

  if (answer === '1') {
    money = money - 2

  } else if (answer === '2') {
    money = money - 1500

  } else if (answer === '3') {
    money = money - 230

  }
  console.log('Your money: ' + money + "$")

  do {
    console.log("U forgot your little sister, so u should find the perfect stuff for her! \n Choose wisely! Choose 1-3!")
    if (hasBag === true) {
      console.log('1 Handmade gift')
      console.log('2 golden Bracelet')
      console.log('3 Giant plush')
    }
    else {
      console.log('1 Handmade gift')//5
    }
    answer = prompt('Type in number: ')
  }
  while (answer !== '1' && answer !== '2' && answer !== '3')

  if (answer === '1') {
    money = money - 0
    gameOver()
  } else if (answer === '2') {
    money = money - 470
    gameOver()
  } else if (answer === '3') {
    money = money - 300
    gameOver()
  }

}




function gameOver() {
  console.log('Your money: ' + money + "$");
  if (money < 0) {
    console.log("U lose u went bankrupt \n \n Do u want to play again? Type: yes or no");

  }
  else if (money > 1200) {
    console.log("U're Grinch, u dont buy good gifts, u lose \n \n Do u want to play again? Type: yes or no");

  }
  else if (money > 0 && money < 1200) {

    console.log("Congratulation, everybody is happy! u find the perfect gifts.\n \n Do u want to play again? Type: yes or no");

  }

  answer2 = prompt()

  //itt a gameOver indítja újra a játékoot, eddig nem indította újra csak folytatódott tovább a noBagQuestion függvénybentől
  if (answer2 === "yes") {
    gameStart();
  }
  if (answer2 === "yes") {
    gameStart();
  }

  /*   else if (answer2 === "no") {
      console.log("Sad but true, this game is not really original!");
      process.exit(0);
    }
    else { console.log("Invalid answer, please try again!") } */
}

//mivel a gameOver újraindítja nem kell while ciklusba rakni
gameStart();

