import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);

        console.log("child constructor");
    }
 
    // componentWillMount(), componentDidMount() chay 1 lần duy nhat khi component duoc khoi tạo, ko có lan thú 2, render chay lai nhiu lần
    componentWillMount(){
        console.log("child componentWillMount")
    }

    componentDidMount(){
            console.log("child componentDidMonut")
    }

    componentWillReceiveProps(nextProps){
        console.log("child componentWillReceiveProps", nextProps);
    }
    render() {
        console.log("child render");
        return (
            <div>
                <h1 className="title">Child</h1>
            </div>
        )
    }
}
