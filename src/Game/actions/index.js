export const actionIncrement = () => {
    return {
        type: 'INCREMENT'
    }
}

export const actionDecrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const actionStart = (player, mode) => {
    return {
        type: 'START',
        player: player,
        mode: mode
    }
}

/*
possible actions in the game:
    changeState(stateName)
        this will cause the system to initialise a new state (and update the stateName object)
    setPlayer(sideName)
        this will choose a side for the player (and also advance to another state)

possible properties in the game:
    stateName:  string  
        the name of the current state
    changes: [ { statename: <string>, stateTitle: <string> } ] - an array of objects 
        showing the possible state changes that are possible from this state
    sides: []
    moves: [] a list of the possible moves (this can just be squareRef1, squareRef2 as this is enough to describe all legal moves)
    currentPlayer: string
    currentBoard: string a representation of the board

initially supported states: Choose, Play, End

in practice we can define legal moves and select a legal move to play by specifying the edge along which a piece will move.
so we have the choice wether to see all legal moves highlighted before selecting them


        1---2---3
      / | \ | / | \
    4---5---6---7---8
      \ | / | \ | /
        9--10--11


        1---2---3
      / | \ | / | \
    4---5---6---7---8
      \ | / | \ | /
        9---A---B

so a simple game state board state would be

use hunter and victim

"123456789AB?nn"
"h..h...hv..H00"
this tells you the positions of the players pieces and who the player to move next is
h = a hunter on this position
. = and empty square
v = a victim on this square

? indicates the next mover

H = a hunter to move next
V = a victim to move next

nn indicates the number of vertical moves made by hunter(s)

00,01,02,...,09,10 (at the ten point then the victim wins)

producing a legal set of moves would be
[
    {"f":"1","t":"2"},
    {"f":"1","t":"6"},
    {"f":"1","t":"5"},
    {"f":"4","t":"5"},
    {"f":"9","t":"5"},
    {"f":"9","t":"6"},
    {"f":"9","t":"A"},
]
or more compactly as
["12","16","15","45","95","96","9A"]
   - these can be the identifiers of the cross-bars in the UX


so once the game has initiated - we would build the initial board
and call the MOVE action 
  if the next move is for the computer then calculate the possible moves
  choose one and make it - returning the new game board
  if the next move is for the user then it just calculates the list of possible moves
  - which will show visually
  
  then the system will wait for an action PLAY which is when a legal move edge is clicked

  then the move is applied and the computer starts thinking about it's move.

  we should probably allow for the fact that the computer may take some time to perform its move
  calculations

  and have a status

  Messages:
    Player|Javascript (Hare|Hound) to move
    Player|Javascript (Hare|Hound) has won
    Player has Quit!

should I have a spinner icon for "thinking"?
*/ 
