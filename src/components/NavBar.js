import React, { Component } from 'react'

// 'rcc' creates class component

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <h1>Card IDs</h1>
                <ul>
                    <li>{this.props.link1}</li>
                    <li>{this.props.link2}</li>
                    <li>{this.props.link3}</li>
                    <li>{this.props.number}</li>
                    <li>drgxd</li>
                </ul>
            </nav>
        )
    }
}

