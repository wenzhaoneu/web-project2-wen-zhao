import './Style/Game.css';
import React from 'react';
import { connect } from 'react-redux';
import GameTable from './GameTable';
import {store} from './index.js';
import {setExistsOnTable} from './GameController';
import {isSet} from './GameController';
import Navbar from "./Navbar.js";

class Game extends React.Component {
    constructor(props){
        super(props);
        store.subscribe(this.selectedCardsListener);
        store.subscribe(this.onTableListener);
    }
    
    handleDispatch(action) {
        this.props.dispatch({type: action});
    }

    handleSetModeAndStart(action, modeChoice) {
        this.props.dispatch({type: action, value: modeChoice});
    }

    selectedCardsListener(){
        const state = store.getState();
        const dispatch = store.dispatch;
        if (! state.cards.selectedCards || state.cards.selectedCards < 3) {
            return;
        }
        // const cardsInSelected = state.cards.selectedCards.length;
        // console.log(cardsInSelected);

        if (state.cards.selectedCards.length === 3) {
            if(isSet(state.cards.selectedCards)){
                dispatch({type: "replaceThreeCards"});
            } else{
                dispatch({type: "clearSelected"});
            }
        }
    }

    onTableListener(){
        const state = store.getState();
        const dispatch = store.dispatch;
        // console.log(setExistsOnTable(state.cards.onTable));

        if (!state.cards.gameStarted) {
            return
        }

        // console.log(state.cards);
        console.log(setExistsOnTable(state.cards.onTable));

        if(state.cards.deck.length === 0 && !setExistsOnTable(state.cards.onTable)){
            // console.log("Game END");
            alert("Game end");
            dispatch({type: "endGame"});
        }

        if (state.cards.deck.length > 0 && state.cards.mode !== "hard" && !setExistsOnTable(state.cards.onTable)) {
            dispatch({type: "moreCards"});
        }
    }

    contentToShow(){
        // console.log(this.props.gameStarted);
        if(this.props.gameStarted){
            return (
                <div>
                    <div className="inGameButtonHolder">
                        <button className="modeButton" onClick={() => this.handleDispatch("newGame")}>Restart Game(same mode)</button>
                        <button className="modeButton" onClick={() => this.handleDispatch("moreCards")}>Flip 3 more cards</button> 
                        <button className="modeButton" onClick={() => this.handleDispatch("endGame")}>End Game / Change Mode</button> 
                    </div>
                    <h4 className="center">{this.props.deck.length} cards left in deck.</h4>
                    <GameTable onTable={this.props.onTable}></GameTable>
                </div>
            )
        } else {
            return (
                <div className="setModeButtons">
                    <button className="modeButton" onClick={() => this.handleSetModeAndStart("setModeAndStart", "easy")}>Start Easy Game</button>
                    <button className="modeButton" onClick={() => this.handleSetModeAndStart("setModeAndStart", "normal")}>Start Normal(Default) Game</button>
                    <button className="modeButton" onClick={() => this.handleSetModeAndStart("setModeAndStart", "hard")}>Start Hard Game</button>
                </div>
            )
        }
    }

    render() {
        // console.log(this.props);
        return(
            <div>
                <h1>SET Card Game</h1>
                <Navbar />   
                {this.contentToShow()}
            </div>
        )
    }
}


let mapDispatchToProps = function(dispatch, props) {
    return {
      dispatch: dispatch,
    }
}

let mapStateTpProps = function(state, props) {
    return {
        gameStarted: state.cards.gameStarted,
        mode: state.cards.mode,
        deck : state.cards.deck,
        onTable : state.cards.onTable,
        selectedCards: state.cards.selectedCards,
    }
}

export default connect(
    mapStateTpProps,
    mapDispatchToProps
)(Game)
