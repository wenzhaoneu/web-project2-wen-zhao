import React from 'react';
import './Style/Rule.css';
import Navbar from "./Navbar.js";<Navbar />   


export default class Rule extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="main-header"></div>
                    <div className="main-content">
                    <Navbar /> 
                    <h1>Game Rules:</h1>
                    <div>When the user starts the game, you will see 12 random cards from the deck.<br /><br /> </div>
                    <div>Select any 3 cards on the deck. </div>
                    <ul>
                        <li>If it is a valid set, those cards should be discarded and 3 more cards should be drawn to replace them. <br /><br /> </li>
                        <li>If the 3 cards are NOT a set, the 3 cards will no longer be added to set. <br /></li>
                    </ul>
                    <div>Finally, when landing on the game page, you could select one of 3 difficulties for this game.<br /><br />
                        The difficulties are as follows: 
                        <ul>
                            <li><b>EASY:</b>An easy game only uses 3 of the 4 features of each card (namely color, shape, and number are variable, but all others are solid). <br /><br /></li>
                            <li><b>MEDIUM:</b> In a medium game, the game will use the normal 81 cards and will automatically draw more cards if no more available set to pick. <br /><br /></li>
                            <li><b>HARD:</b>A hard game uses the normal 81 cards and will NOT automatically draw cards for the player.<br /><br /></li>
                        </ul>
                        <div>SET Example as following: <br/><br/>
                            The first one is the SET! The second is NOT! <br/><br/>
                        </div>
                        <div id="footer">
                            <div className="image1"></div>
                            <div className="image2"></div>
                        </div>
                        <div><br/>Find more SET and Enjoy Game!</div>

                    </div>

                    </div>

                </div>
               
            </div>
            
        )
    }
}

