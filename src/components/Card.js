import React from 'react';
// 'rfc' creates function component

//Class components are used for interactive elements (clicks/input/hovers etc.)
//Functional componenets are used for statc data

export default function Card(props) {
        const img = `https://api.adorable.io/avatars/134/${props.pic}.png`
        
        return (
            
            <div className = "card">
                <img src={img} alt ="Profile Image" />
                <div className="details">
                <h1>Name: {props.name}</h1>
                    <h3>City: {props.city}</h3>
                </div>
            </div>
        );
   
}