import {selectCard} from './GameController';
import {clearSelected} from './GameController';
import {replaceThreeCards} from './GameController';
import {setupNewGame} from './GameController';


function CardsReducer(state={gameStarted: false, mode: "normal", deck: [], onTable:[], selectedCards:[],}, action) {
    switch(action.type) {
        case "setModeAndStart": {
            const newState = {
                ...state,
                mode: action.value,
                gameStarted: true,
            }

            return setupNewGame(newState);
        }
        case "endGame": {
            return {
                gameStarted: false, 
                mode: "normal", 
                deck: [], 
                onTable:[], 
                selectedCards:[],
            }
        }
        case "newGame": {
            return setupNewGame(state);
        }
        case "moreCards": {
            let threeCards = state.deck.slice(0,3);
            let newDeck = state.deck.slice(3, state.deck.length);
            let newOntable = state.onTable.concat(threeCards);

            return {
                ...state,
                deck: newDeck,
                onTable: newOntable,
                selectedCards:state.selectedCards,
            }
        }
        case "selectCard": {
            return selectCard(state, action);
        }
        case "replaceThreeCards": {
            return replaceThreeCards(state);
        }
        case "clearSelected": {
            return clearSelected(state);
        }
        default:
            return state;
    }
    
}

export default CardsReducer;
