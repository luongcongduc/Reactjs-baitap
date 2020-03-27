import React, { Component } from 'react'
import Child from './child'
import Pure from './pure'
export default class Lifecycle extends Component {
    constructor(props){
        super(props);

        this.state= {
            name: "duc"
        }
    }
    componentWillMount() {
        console.log(" componentWillMount");
    }

    componentDidMount(){
        console.log("  componentDidMount");
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentDidUpdate(){
        console.log(" componentDidUpdate");
    }

    shouldComponentUpdate(nextProps , nextState){
            console.log(nextProps,nextState);
            // khong có update lại
            // if(nextState.name === "ducvidai"){
            //     return false;
            // }
            return true;
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps");
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1 className="title"> Lifecycle</h1>
                <button className="btn btn-success" onClick={()=>{this.setState({name: "ducvidai"})}} >Click</button>
                <Child name={this.state.name} />
                <Pure />
            </div>
        )
    }
}
