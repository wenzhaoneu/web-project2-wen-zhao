import React from 'react';
import style from './Style/HomePage.css';
import { useLocation } from 'react-router-dom'
import Rule from './Rule';
import {Link, NavLink} from "react-router-dom";

export default class Home extends React.Component {
    // handleClick(event){
    //     this.props.history.push("/Rule");
    //   }



    // function HeaderView() {
    //     const location = useLocation();
    //     console.log(location.pathname);
    //     return <span>Path : {location.pathname}</span>
    //   }


    render() {
        return (
                <div id="container">
                    <div id="header"></div>
                    <div id="content">
                        <div id="borderimg2" className="tittle">Welccome to SET Card Game!</div>
                    </div>
                    <div id="footer">
                        <Link exact to={"/Game"}><button id="start"></button></Link>
                        <Link exact to={"/Rule"}><button id="rules"></button></Link>
                    </div>
                </div>


            
        )
    }
}