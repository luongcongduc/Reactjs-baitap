import React, { Component } from 'react';

class BaiTapCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: './img/imgRedCar.jpg'
        }
    }

    onClick=(color) =>{
        let imgg = "";
        switch (color) {
            
            case "red":
                imgg = './img/imgRedCar.jpg'
                break;
        case "black":
            imgg = './img/imgBlackCar.jpg'
            break;
            case "sliver":
                imgg="./img/imgSilverCar.jpg"
                break;
            default:
                break;
        }
        this.setState({
            img : imgg
        })
    }

    render() {
        const styecolor = {
            color: 'white',
            marginRight: '5px'
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <img src={this.state.img} width="600px" />
                    </div>
                    <div className ="col-sm-5">
                        <button className="btn btn-success " onClick={()=>{this.onClick("red")}} style={styecolor}>Red</button>
                        <button className="btn btn-danger " onClick={()=>{this.onClick("black")}} style={styecolor}>black</button>
                        <button className="btn btn-dark "onClick={()=>{this.onClick("sliver")}} style={{color:'#ffff', backgroundColor:'#000'}}>sliver</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default BaiTapCar;