# rock-paper-scissors

1. inputs: 
- (single player): hand of the player 
- multi player: hand of both players at the same time?
2. output: 
determine the winner based on the two hands
- rock beats scissors
- scissors beat paper
- paper beats rocks

1. get player hand
2. generate computer hand
3. if both are the same, return to line 1
4. determine the winner, maybe tally scores
5. play again? 

## the player object
A player has a hand and a score (name? default: P1)
- what's the name of the computer?

## a round
player picks hand (1 - rock, 2 - paper, 3 - scissors)
1. 
display the hands - eg. P1: rock Computer: rock
determine the outcome - "draw - play again", "rock beats scissors, P1 gets a point"
calculate who gets the point

# rules

## reach a score
check if someone has reached the target score (3?)
if the score is reached, announce winner
else: start a new round

## best of 3 rounds
establish a number of rounds (def: 3)
start a round
if draw, start a new round
else award score
check if all rounds have elapsed - round counter reached
    if yes: game over, announce winner, new round?
    if not, start new round

# UI

input field for player name
buttons for the options (rock, paper, scissors)
a place where the opponents pick will be
layout: side by side or top-bottom
scores tally - it should be obvious how many points/rounds you need to win