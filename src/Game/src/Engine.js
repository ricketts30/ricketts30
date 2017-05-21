
export const pN = 0;
export const pNE = 1;
export const pE = 2;
export const pSE = 3;
export const pS = 4;
export const pSW = 5;
export const pW = 6;
export const pNW = 7;

class Engine {

    constructor(){

    }

    static getLegalMoves(boardObject){
        return [];
    }

    static getStartingBoard(){
        return {
            v: 8, 
            h1: 1, 
            h2: 4, 
            h3: 9,
            vert: 0,
            next: 'h'
        }
    }

    static isOccupied(loc, boardObj){
        var isOcc = false;
        if(boardObj != null){
            if(boardObj.v == loc 
            || boardObj.h1 == loc
            || boardObj.h2 == loc
            || boardObj.h3 == loc
            )
            {
                isOcc = true;
            }
        }
        return isOcc;
    }

    static getLocation(direction, location){
        var loc = -1;
        switch(location){
            case 1:
                switch(direction){
                    case 'e':
                        loc = 2;
                    break;
                    case 'se':
                        loc = 6;
                    break;
                    case 's':
                        loc = 5;
                    break;
                    case 'sw':
                        loc = 4;
                    break;
                }
            break;
            case 2:
                switch(direction){
                    case 'e':
                        loc = 3;
                    break;
                    case 's':
                        loc = 6;
                    break;
                    case 'w':
                        loc = 1;
                    break;
                }
            break;
            case 3:
                switch(pos){
                    case 'se':
                        loc = 8;
                    break;
                    case 's':
                        loc = 7;
                    break;
                    case 'sw':
                        loc = 6;
                    break;
                    case 'w':
                        loc = 2;
                    break;
                }
            break;
            case 4:
                switch(direction){
                    case 'ne':
                        loc = 1;
                    break;
                    case 'e':
                        loc = 5;
                    break;
                    case 'se':
                        loc = 9;
                    break;
                }
            break;
            case 5:
                switch(direction){
                    case 'n':
                        loc = 1;
                    break;
                    case 'e':
                        loc = 6;
                    break;
                    case 's':
                        loc = 9;
                    break;
                    case 'w':
                        loc = 4;
                    break;
                }
            break;
            case 6:
                switch(direction){
                    case 'n':
                        loc = 2;
                    break;
                    case 'ne':
                        loc = 3;
                    break;
                    case 'e':
                        loc = 7;
                    break;
                    case 'se':
                        loc = 11;
                    break;
                    case 's':
                        loc = 10;
                    break;
                    case 'sw':
                        loc = 9;
                    break;
                    case 'w':
                        loc = 5;
                    break;
                    case 'nw':
                        loc = 1;
                    break;
                }
            break;
            case 7:
                switch(direction){
                    case 'n':
                        loc = 3;
                    break;
                    case 'e':
                        loc = 8;
                    break;
                    case 's':
                        loc = 11;
                    break;
                    case 'w':
                        loc = 6;
                    break;
                }
            break;
            case 8:
                switch(direction){
                    case 'sw':
                        loc = 11;
                    break;
                    case 'w':
                        loc = 7;
                    break;
                    case 'nw':
                        loc = 3;
                    break;
                }
            break;
            case 9:
                switch(direction){
                    case 'n':
                        loc = 5;
                    break;
                    case 'ne':
                        loc = 6;
                    break;
                    case 'e':
                        loc = 10;
                    break;
                    case 'nw':
                        loc = 4;
                    break;
                }
            break;
            case 10:
                switch(direction){
                    case 'n':
                        loc = 6;
                    break;
                    case 'e':
                        loc = 11;
                    break;
                    case 'w':
                        loc = 9;
                    break;
                }
            break;
            case 11:
                switch(direction){
                    case 'n':
                        loc = 7;
                    break;
                    case 'ne':
                        loc = 8;
                    break;
                    case 'w':
                        loc = 10;
                    break;
                    case 'nw':
                        loc = 6;
                    break;
                }
            break;
        }
        return loc;
    }
}

/*
The Engine class is initially responsible for simply generating all the list of legal moves from the supplied game position (in notation form)
next up it will generate a score (win,lose,draw,unknown) for any supplied game position (in notation form)
after that it will start doing min max stuff to work out the scores for moves based on look ahead.
initial game state: 'h..h...vh..|00|H'
*/

export default Engine