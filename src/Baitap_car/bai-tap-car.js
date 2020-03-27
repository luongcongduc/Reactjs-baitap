import React, {Component} from 'react';

export default class BaitapCar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            imgCar : "./img/imgRedCar.jpg"
        };
    }

    handleChangeCar = (color) =>{
        console.log(color);
        // su dung hàm switch -case vì nhìu biến
        let img = "";
        switch (color) {
            case "red":
                img = "./img/imgRedCar.jpg";
                break;

            case "sliver":
                img = "./img/imgSilverCar.jpg";
                break;

            default:
                img =  "./img/imgBlackCar.jpg";
                break;
        }

        this.setState({
            imgCar : img
        });
    };

    render(){
        return (
            <div className="container">
                <h3 className="title">Baitapcar</h3>
                <div className="row">
                    <div className="col-sm-7">
                        {/* <img className="img-fluid" src="./img/imgRedCar.jpg" alt=""/> */}
                        <img className="img-fluid" src={this.state.imgCar} alt=""/>
                    </div>
                    <div className="col-sm-5">
                        <button className="btn btn-danger mx-2" onClick={() =>{this.handleChangeCar("red")}}>Red</button>
                        <button className="btn btn-light mx-2" onClick={() =>{this.handleChangeCar("sliver")}}>Sliver</button>
                        <button className="btn btn-dark mx-2" onClick={() =>{this.handleChangeCar("black")}}>Black</button>
                    </div>
                </div>

            </div>
        )
    }
}