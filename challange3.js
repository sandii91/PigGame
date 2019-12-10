/*
Challenges 3

1. A player loosen his ENTIRE score he rolls two 6 in a row. after that, it's the next player's turn. 
(hint: Always save the previous dice roll in separate variable)
2. Add an input field to the HTMl where players can set the winning score, so that they can change the predefines score of 
100. (Hint: you can read that value with the .value property in JavaSript. This is a
good oportunity to use google for figure this out :)
3. Add another dice to the game, so that there are two dice now. The player loosen his current score
when on of then is a 1.( Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.

*/

var scores, roundScore, activePlayer, gamePlaying;
init();

// ROLL DICE
var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying) {
           // 1. Random number
   var dice1 = Math.floor(Math.random() * 6 ) + 1;
   var dice2 = Math.floor(Math.random() * 6 ) + 1;
    
    // 2. Display the result
   document.getElementById('dice-1').style.display = 'block';
   document.getElementById('dice-2').style.display = 'block';
   document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
   document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
    // 3. Update the round score IF the rolled number was not a 1
    
    if (dice1 !== 1 && dice2 !== 1) {
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else { 
    // Next player
        nextPlayer();
        
        }
    }
});
    // 1. Random number
   var dice1 = Math.floor(Math.random() * 6 ) + 1;
   var dice2 = Math.floor(Math.random() * 6 ) + 1;
    
    // 2. Display the result
     document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    // 3. Update the round score IF the rolled number was not a 1
    
    if (dice1 !== 1 &&  dice2 !==1) {
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else { 
    // Next player
        nextPlayer();
        
    }


//button-hold


        document.querySelector('.btn-hold').addEventListener('click', function() {
           
            if (gamePlaying) {
                   // Add CURRENT score to GLOBAL score
            scores[activePlayer] += roundScore;
            
            // Update the UI 
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                
        var input = document.querySelector('.final-score').value;       
        var winningScore = input;
                
                 if(input) {
                     winningScore = input;
                }
                else {
                    winningScore = 100;
                }
            
            // Check if player won the game
            if(scores[activePlayer] >= winningScore) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner';
                document.getElementById('dice-1').style.display = 'none';
                document.getElementById('dice-2').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            }    
                
            else {
            
            // Next player
               nextPlayer();    
            }
            }
         
        });


    function nextPlayer() {
         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        
        //document.querySelector('.dice1').style.display = 'none';
        //document.querySelector('.dice2').style.display = 'none';
        document.getElementById('dice-1').style.display = ' none ';
        document.getElementById('dice-2').style.display = ' none ';
    }


        document.querySelector('.btn-new').addEventListener('click', init); 
        

        function init () {
            scores = [0, 0];
            activePlayer = 0;
            roundScore = 0;
            gamePlaying = true;
        
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';

        document.getElementById('score-0').textContent = ' 0 ';
        document.getElementById('score-1').textContent = ' 0 ';
        document.getElementById('current-0').textContent = ' 0 ';
        document.getElementById('current-1').textContent = ' 0 ';
        document.getElementById('name-0').textContent = ' Player 1 ';
        document.getElementById('name-1').textContent = ' Player 2 ';
            
        //remuve the winner class
            
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }















