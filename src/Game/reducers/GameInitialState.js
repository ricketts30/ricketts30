
class GameInitialState{

}

GameInitialState.Create = function(){
    return {
        counter: 0,
        stateName: 'initial',
        verticals: 0,
        lookahead: 0,
        player: '?',
        mode: '?',
        next: 'H',
        board: ['h','.','.','h','.','.','.','v','h','.','.']
    }
}

export default GameInitialState