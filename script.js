"use strict";
{/*Start of code block*/

  const startGame= function(p) {
    p = prompt("Do you want to play a game?");
    if (p.toLowerCase() === "yes" || p.toLowerCase() === "y") {
      let user = prompt("What is your character's name?");
      alert("Great! Open up your browser's console to see the game unfold.");
      startCombat(user);
      } else {
      alert("Oh well, maybe next time.  Goodbye!");
      console.log("Goodbye!");
    }

  }; /*End of startGame function*/


  const getDamage = function(){
    return Math.floor(Math.random() * 5) + 1;
  };

  const startCombat = function(user) {
    let userWins = 0;
    let grantWins = 0;
    let userHealth = 40;
    let grantHealth = 10;



    while (userWins < 3 && grantWins < 1) {

      let choice = prompt("Would you like to attack (a) or quit (q) ?");
      if (choice.toLowerCase() === "attack" || choice.toLowerCase() === "a") {

          /*Health equations*/

      grantHealth = grantHealth - getDamage();
      console.log(`Grant's health is at ${grantHealth}`);
      userHealth = userHealth - getDamage();
      console.log(`${user}'s health is at ${userHealth}`);

         /*End of health equations*/

      if (grantHealth <= 0 && userWins < 3) {
        grantHealth+= 10;
        userWins +=1;
        console.log(`${user} has won: ${userWins}`);
      }

      if (userHealth <= 0) {
        grantWins += 1;
        console.log("Grant wins!");
        break;
      }

      if (userWins === 3) {
        console.log(`${user} wins!`);
        break;
      }

      } else if (choice.toLowerCase() === "quit" || choice.toLowerCase() === "q") {
        console.log("Thanks for playing!");
        break;
      }

    }/*End of while loop*/

  }; /*End of startCombat function*/


  startGame();

}/*End of code block---------------------------------------------*/
