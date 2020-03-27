import React, { Component } from "react";
import Header from "./header";
import Slide from "./slide";
import Listcard from "./list-card";
import Itemcard from "./item-card";
import Whatwedo from "./what-we-do";
import Contact from "./contact";
import Footer from "./footer";

export default class Baitap2 extends Component { // dùng class ke thua theo huong doi tuong
    render(){
        return <div>
            <Header />
            <Slide />
            <div className="container">
            <div className="row" >
           <Whatwedo />
            <Contact />
           </div>
            </div>
           
           
            <Listcard />
            <Footer />
        </div>
    }
}