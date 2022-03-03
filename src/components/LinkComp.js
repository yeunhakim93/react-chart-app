import React from "react"
import {Link} from 'react-scroll'




export default function LinkComp (props) {
    return (
        <Link to={props.id} spy={true} smooth={true} offset={-150} duration={500} className="nav-link" href="">{props.title}</Link>
    )
}
