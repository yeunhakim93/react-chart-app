import React, { useState, useEffect} from "react"
import {Link} from 'react-scroll'
import data from "./data.js"
import LinkComp from "./LinkComp.js"

export default function Navbar (){
    const linkmap = data.map(item => {
        return (
            <li className="nav-item">
                <LinkComp
                    key = {item.id}
                    id = {item.className}
                    title = {item.title}
                />
            </li>
        )
    })

    return (
        <nav className= "navbar navbar-expand-md navbar-light bg-light shadow fixed-top" id="home">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                {linkmap}
                </ul>
            </div>
        </nav>
    )
}