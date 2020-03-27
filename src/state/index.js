import React, {Component} from 'react';

export default class State extends Component{

   constructor(props){
       super(props);

       this.state = {
           // key : value
           username : "ducvidai",
           isLogin : false
       };
   }

    renderInfo = () =>{

    //     Cách 1:
    //     if(this.state.isLogin){
    //         return <div>Hello {this.state.username}</div>
    //     }

    //     return (
    //     <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
    //     );
    // };

  


    //Cách 2: viet toán tử 3 ngôi

    return this.state.isLogin ? (<div>Hello {this.state.username}</div>) : ( <button className="btn btn-success" onClick={this.handleLogin}>Login</button>);
    
    };

    handleLogin = () =>{
            // console.log(123);
            this.setState({
                isLogin: true
            });
        }
    // Neu nhu state thay doi thi hàm render sẽ chạy lại
    render(){
        console.log("render");
        return (
            <div className="title">State <br />
             {this.renderInfo()}
            </div>
           
        )
    }
}