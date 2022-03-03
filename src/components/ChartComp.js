import React from "react"
import { Bar, Line, Bubble, Doughnut, Pie, Radar, Scatter, PolarArea } from "react-chartjs-2"

const components = {
    "Bar": Bar,
    "Line": Line,
    "Bubble": Bubble,
    "Doughnut": Doughnut,
    "Pie": Pie,
    "Radar": Radar,
    "Scatter": Scatter,
    "PolarArea": PolarArea
}

export default function ChartComp (props) {

    const ChartType = components[props.type];
    function url () {
        if (props.url){
            return <span><a className= "badge" href={props.url}>*</a></span>
        }
        return;
    }


    return (
        <div className="container chart">
            <h1>{props.title} {url()}</h1>
            <ChartType 
                className = {props.className}
                id = {props.idName}
                data = {props.data}
                options = {props.options}
                plugins = {props.plugins}
            />
        </div>
    )

}