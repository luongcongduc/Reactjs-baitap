import React ,{Component} from 'react';

export default class HandlingEvent extends Component{

    // su dung arrow function de viet hon
    handlingEvent = () =>{ 
        console.log(1234);
    };

    handlingEventParam = (name) =>{
        console.log(name);
    }

    // constructor(props){
    //     super(props);

    //     this.HandlingEvent = this.HandlingEvent.bind(this);
    // }
    // name= "duc";

    // HandlingEvent() {
    //     console.log(this.name);
    // }
    render(){
        return (
            <div>
                <h3 className="title"> HandlingEvent</h3>
                <button className="btn btn-success" onClick={this.handlingEvent}>HandlingEvent</button>

                <button className="btn btn-danger" onClick={() => {this.handlingEventParam("Duc")}} >handlingEvent Params</button>
            </div>
        )
    }
}