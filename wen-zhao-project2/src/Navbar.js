import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./Style/Navbar.css";

export default class Navbar extends React.Component {
    render () {
        return (
            <div className="ButtonHolder">
                <ul>
                    {/* <a onClick={() =>history.push('Home')}>Home</a>Link exact to={"/Game"}
                    <a onClick={() =>history.push('Rule')}>Home</a> */}
                    <Link exact to={"/Home"}><button className="ButtonStyle">Home</button></Link>
                    <Link exact to={"/Game"}><button className="ButtonStyle">Game</button></Link>
                    <Link exact to={"/Rule"}><button className="ButtonStyle">Rule</button></Link>
                </ul>
            </div>

        )

    }
}