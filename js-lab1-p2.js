"use strict";
{/*Start of code block*/

  const startGame= function(p) {
    p = prompt("Do you want to play a game?");
    if (p.toLowerCase() === "yes") {
      let user = prompt("What is your character's name?");
      startCombat(user);
      } else {
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

      let choice = prompt("Would you like to attack or quit?");
      if (choice.toLowerCase() === "attack") {

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

      } else if (choice.toLowerCase() === "quit") {
        console.log("Thanks for playing!");
        break;
      }

    }/*End of while loop*/

  }; /*End of startCombat function*/


  startGame();

}/*End of code block---------------------------------------------*/
