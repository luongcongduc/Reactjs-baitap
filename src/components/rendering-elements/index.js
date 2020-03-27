import React, {Component} from 'react';

export default class RenderingElements extends Component{

    name= " duc";
    lop ="fe32";

    renderInfo = () =>{  // goi hàm
        return (
            <div>Ho ten: {this.name} - lop:{this.lop}</div>
        ) ;
    };

    render(){
        return <div>
           <h3 className="title">RenderingElements</h3> 
    <div>Name: {this.name}</div>
    <div>Lop:{this.lop}</div>
    {this.renderInfo()};
           </div>
    }
}