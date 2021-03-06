import React, { PropTypes } from 'react';

const GameComponent = ({ incrementClick, decrementClick, startClick, counter, stateName, player, mode}) => {

   var chooser = null;
   if(stateName === "initial"){
       chooser = <div>
                    <h3>Choose a Side:</h3>
                    <p>
                        <select>
                            <option value='H'>&#x1f436; Hound (goes first)</option>
                            <option value='V'>&#x1f430; Hare (goes second)</option>
                        </select>
                    </p>
                    <h3>Difficulty:</h3>
                        <select>
                            <option value='rnd'>Computer makes a random legal move</option>
                            <option value='fst'>Computer makes first legal move</option>
                            <option value='lst'>Computer makes last legal move</option>
                        </select>
                    <p>
                        <button onClick={() => startClick('a1','b2')}>Start</button>
                    </p>
                </div>;
   }

   return (
        <div>

            <p>counter: {counter} 
                <button onClick={() => incrementClick()}>+</button>
                <button onClick={() => decrementClick()}>-</button>
            </p>

            <p>current state: <b>{stateName}</b></p>

            <div className="theBoard">
                <p></p>
                <table className="board">
                    <tbody>
                        <tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>
                        <tr><td> </td><td> </td><td> </td><td className="cell cell1">&#x1f436;</td><td className="horiz">&#x2500;</td><td className="cell cell2"> </td><td className="horiz">&#x2500;</td><td className="cell cell3"> </td><td> </td><td> </td><td> </td></tr>
                        <tr><td> </td><td> </td><td className="slash">&#x2571;</td><td className="vert">&#x2502;</td><td className="slash">&#x2572;</td><td className="vert">&#x2502;</td><td className="slash">&#x2571;</td><td className="vert">&#x2502;</td><td className="slash">&#x2572;</td><td> </td><td> </td></tr>
                        <tr><td> </td><td className="cell cell4">&#x1f436;</td><td className="horiz">&#x2500;</td><td className="cell cell5"> </td><td className="horiz">&#x2500;</td><td className="cell cell6"> </td><td className="horiz">&#x2500;</td><td className="cell cell7"> </td><td className="horiz">&#x2500;</td><td className="cell cell8">&#x1f430;</td><td> </td></tr>
                        <tr><td> </td><td> </td><td className="slash">&#x2572;</td><td className="vert">&#x2502;</td><td className="slash">&#x2571;</td><td className="vert">&#x2502;</td><td className="slash">&#x2572;</td><td className="vert">&#x2502;</td><td className="slash">&#x2571;</td><td> </td><td> </td></tr>
                        <tr><td> </td><td> </td><td> </td><td className="cell cell9">&#x1f436;</td><td className="horiz">&#x2500;</td><td className="cell cellA"> </td><td className="horiz">&#x2500;</td><td className="cell cellB"> </td><td> </td><td> </td><td> </td></tr>       
                        <tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>
                    </tbody>
                </table>
                <p>Consequtive Vertical Hound Moves: <b>{0}</b></p>
                <p>Status: <b>Game has not started.</b></p>
            </div>

            {chooser}

            <ul>
                <li><b>player</b>: {player}</li>
                <li><b>mode</b>: {mode}</li>
            </ul>

        </div>
    );
}

GameComponent.propTypes = {
    incrementClick: PropTypes.func.isRequired,
    decrementClick: PropTypes.func.isRequired,
    startClick: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    stateName: PropTypes.string.isRequired
}

export default GameComponent