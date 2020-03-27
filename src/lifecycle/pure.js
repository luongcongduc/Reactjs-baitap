import React, { Component, PureComponent } from 'react'

export default class Pure extends PureComponent {
    render() {
        console.log("Pure render");
        return (
            <div>
                <h1 className="title">pure</h1>
            </div>
        )
    }
}
