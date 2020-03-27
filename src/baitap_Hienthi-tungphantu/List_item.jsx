import React, { Component } from 'react';
// import img from '../../public/img'
import List from './list'
import { arrayMove } from 'react-sortable-hoc';
class ListItem extends Component {
constructor(props){
    super(props);
    this.state ={
        items:[
         '../../public/img/slide_1.jpg',
            './img/slide_2.jpg',
            './img/slide_3.jpg'
        ]
    }
}
    render() {
        return (
            <div>
                <List items={this.state.items} onSordEnd={this.onSordEnd.bind(this)}/>
            </div>
        );
    }

    onSordEnd(oldIndex, newIndex){
        this.state({
            items: arrayMove(this.state.items,oldIndex,newIndex)
        })
    }
}

export default ListItem;