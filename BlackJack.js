 // This variable is used in one of the alternate wins. It is made false in playBlackJack() and true in testLuck
        var testedLuck
        // All the variable were made global and are changed within each function or are referenced in them.
        let draw1;
        let draw2;
        let draw3;
        let drawSum
        function playBlackJack(){
            testedLuck = false;
            // variable to hold our first 'card'. it changes the global variable as well incase the player chooses to test their luck.
            draw1 = drawCard();
            // Chanes the divCard1 to give the resulting generated number.
            document.getElementById("divCard1").textContent="First Card ="+ draw1;
            console.log("card1 =" + draw1)

            // Same as above but a it generates and stores a different number.
            draw2 = drawCard();

            console.log("card2 =" + draw2)
            document.getElementById("divCard3").textContent="Second Card ="+ draw2;

            // adds the two previous numbers into a sum which then gets displayed in divSum and console
            drawSum = draw1 + draw2;
                 document.getElementById("divSum").textContent="hand ="+ drawSum;
                console.log("drawSum =" + drawSum);
            // }
            // runs the winGame Function which checks the sum against multiple requirements.
            winGame();
            
        }

        // Allows the player to take their previous two generated numbers and generate a new number between 1-10 to try and win, has two alternate fail dialogues.
        function testLuck(){
            // Changes the testedLuck bool to be true for winGame
                testedLuck = true;
                // these following lines grab the previously generated draw1 and draw2 card for confirmation.
                console.log("Testing your luck!")
            document.getElementById("divCard1").textContent="First Card ="+ draw1;
            console.log("card1 =" + draw1)

            document.getElementById("divCard2").textContent="Second Card ="+ draw1;
            console.log("card2 =" + draw2)

            // generates a number between 1 and 10 and puts in in a new line below the previous ones.
            draw3 = drawCard();
            document.getElementById("divCard3").textContent="Final.. Card ="+ draw3;
            console.log("card3 =" + draw3)

            // adds the three previously generated numbers displays them gives a possible number between 3 and 30
            drawSum = draw1 + draw2 + draw3;
            document.getElementById("divSum").textContent="hand ="+ drawSum;
            console.log("drawSum =" + drawSum)

            // Runs the funciton to check which win/lose state the player gets.
            winGame();
            }

            // This function is ran in both the above instances to check if the player has won.
        function winGame(){
            // since the dealer can only draw 17 in this version of blackjack you win if your number is between 18 and 21 with 21 giving a unique win.
            if (drawSum >= 18 && drawSum <= 20){
                document.getElementById("divVictory").textContent = "Good job you beat the dealer!"
            }
            else if(drawSum == 21){
                document.getElementById("divVictory").textContent = "Flawless victory! You're lucky today!"
            }
            else if(drawSum <= 17 && testedLuck == false){
                document.getElementById("divVictory").textContent = "That's a loss... Unless you wannna.. Test Your Luck!"
            }
            else if(drawSum > 21){
                document.getElementById("divVictory").textContent = "Ooh you tested your luck a bit too much, that's a bust."
            }
            else{
                document.getElementById("divVictory").textContent = "Guess it's not in the cards, how about another game? "
            }
        }

        // Will generaate a number 1-10 
        function drawCard(){
            let number = Math.random() * 10;

            number = Math.ceil(number);

            return number;
        }