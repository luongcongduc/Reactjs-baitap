import React, {Component} from 'react';

export default class ExampleHandlingEvent extends Component{

    username = "ducvidai";
    isLogin = false;

    renderInfo = () =>{
        if(this.isLogin){
            return <div>Hello {this.username}</div>
        }

        return (<button className="btn btn-success" onClick={this.handleLogin}>Login</button>
        );
    };

    handleLogin = () =>{
        // console.log(123);
        this.isLogin = true;
        console.log(this.isLogin);
    }


    render(){
        // console.log("render");
        return (
            <div className="title">ExampleHandlingEvent <br />
             {this.renderInfo()}
            </div>
           
        )
    }
}