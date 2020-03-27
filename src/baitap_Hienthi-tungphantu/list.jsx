import React, { Component } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import Item from './item'
class List extends Component {

    render() {
        const SorList = SortableContainer(({items})=>{
            let list_item = items.map((item,index)=>{
                return <Item key={index} item={item}
                index={index} />;
            });
            return (
                <div style={{background:'#FF0'}}>{list_item}</div>
            );
        })
        return (
            <SorList  items={this.props.items} onSordEnd={this.props.onSordEnd}/> 
        )
       
    }
}

export default List;