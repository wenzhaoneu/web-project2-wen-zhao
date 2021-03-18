export const COLORS = ["#DE3163", "#F28C28", "#279697"]
export const SHAPES = ["S", "U", "N"]
export const SHADINGS = ["open", "full", "stripe"]
export const NUMS = [1, 2, 3]
export const MESSAGES = {
    isSet: "A set is found!",
    notASet: "Not a set!",
    gameEnd: "Game is end!"
}

export function setupNewGame(state) {
    const newDeck = createDeck(state.mode);
    const onTable = newDeck.slice(0,12);
    const deckStock = newDeck.slice(12,81);
    return {
            ...state,
            deck: deckStock,
            onTable: onTable,
            selectedCards:[],
    }
}

export function createDeck(mode){
    let deck = [];

    if (mode === "easy") {
        for (let i = 0; i < COLORS.length; i++) {
            for (let j = 0; j < SHAPES.length; j++) {
                for (let k = 0; k < SHADINGS.length; k++) {
                    deck.push({
                        id :  COLORS[i] + "_" + SHAPES[j] + "_" + SHADINGS[k] + "_" + NUMS[0],
                        color : COLORS[i],
                        shape : SHAPES[j],
                        shading : SHADINGS[k],
                        num : NUMS[0],
                        select: "unselect",
                    });
                }
            }
        }
    } else {
        for (let i = 0; i < COLORS.length; i++) {
            for (let j = 0; j < SHAPES.length; j++) {
                for (let k = 0; k < SHADINGS.length; k++) {
                    for (let l = 0; l < NUMS.length; l++) {
                        deck.push({
                            id :  COLORS[i] + "_" + SHAPES[j] + "_" + SHADINGS[k] + "_" + NUMS[l],
                            color : COLORS[i],
                            shape : SHAPES[j],
                            shading : SHADINGS[k],
                            num : NUMS[l],
                            select: "unselect",
                        });
                    }
                }
            }
        }
    }

    return shuffle(deck);
}


export function selectCard(state, action){
    let newOnTable = [];
    let targetCardId= action.value;
    let newSelected = state.selectedCards;

    for (let i=0; i< state.onTable.length; i++){
        let currentCard = state.onTable[i];
        if (currentCard.id === targetCardId){
            let selectedCurrentCard = {...currentCard, select: "selected"};
            newOnTable.push(selectedCurrentCard);
            newSelected.push(selectedCurrentCard);
        } else {
                newOnTable.push(currentCard);
        }
    }

    const newState = {...state, onTable: newOnTable, selectedCards: newSelected};
    return newState;
}

function shuffle(deck) {
    
    for (let i = deck.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    return deck;
}


export function wait(ms){
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


export function isSet(onTable) {
    let colorSet = new Set();
    let shapeSet = new Set();
    let shadingSet = new Set();
    let numSet = new Set();

    for (let i=0; i<3; i++){
        colorSet.add(onTable[i].color);
        shapeSet.add(onTable[i].shape);
        shadingSet.add(onTable[i].shading);
        numSet.add(onTable[i].num);
    }

    if (colorSet.size === 2 || shapeSet.size === 2 || shadingSet.size === 2 || numSet.size === 2) {
        return false;
    }

    return true;
}


export function clearSelected(state) {
    let newOnTable = [];

    for(let i=0; i < state.onTable.length; i++) {
        let currentCard = state.onTable[i];
        if (currentCard.select === "selected"){
            newOnTable.push({...currentCard, select: "unselect",})
        } else {
            newOnTable.push(currentCard);
        }
    }
    const newState = {...state, onTable: newOnTable, selectedCards: []};
    return newState;
}


export function replaceThreeCards(state) {

    let newDeck = state.deck;
    let newOnTable = [];

    for(let i=0; i < state.onTable.length; i++) {
        let currentCard = state.onTable[i];
        if (currentCard.select === "selected"){
            if(newDeck.length > 0 && state.onTable.length <= 12){
                newOnTable.push(newDeck.pop());
            }
        } else {
            newOnTable.push(currentCard);
        }
    }

    return {...state, deck: newDeck, onTable: newOnTable, selectedCards: []};
}


export function setExistsOnTable(onTable) {
    if (! onTable) {
        return false;
    }
    for (let i = 0; i < onTable.length; i++) {
        for (let j = i + 1; j < onTable.length; j++) {
            for (let k = j + 1; k < onTable.length; k++) {
                let threeCards = [onTable[i], onTable[j], onTable[k]];
                if (isSet(threeCards)){
                    console.log(i, j, k);
                    return true;
                }
            }
        }
    }
    return false;
}