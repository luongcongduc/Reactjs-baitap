import React, { Component } from "react";
import Itemcard from "./item-card";
export default class Listcard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Itemcard />
                    <Itemcard />
                    <Itemcard />
                </div>
            </div>

        )

    }
}