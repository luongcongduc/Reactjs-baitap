import React, { Component } from 'react';
import data from './data.json'
class PhimVonglap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataphim: data
        }
    }

    renderHTML = () => {
        return this.state.dataphim.map((item, index) => {
            return (
                <div className="card col-4" key={index}>
                    <img className="card-img-top" src={item.hinhAnh} width={200} height={450} alt="bidanh" />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenPhim}</h4>
                        <p className="card-text">{item.moTa.length > 100 ? item.moTa.substr(0,100) + '...' : item.moTa}</p>
                    </div>
                   
                </div>

            )
        })
    }
    render() {
        console.log(this.state.dataphim)
        return (
            <div className="container">
                <div className="row">
                    {this.renderHTML()}
                </div>

            </div>
        );
    }
}

export default PhimVonglap;