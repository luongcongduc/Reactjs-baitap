import React, { Component } from 'react';
import { SortableElement } from 'react-sortable-hoc';

class Item extends Component {

    render() {
        const Soritem = SortableElement(({item})=>{
        return (
            <div style={{
                border:'2px solid #F00',
                background:'#0DD',
                padding:'10px',
                marginBottom:'10px'
            }} >
                    {item}
            </div>
        );
    });
    return <Soritem index={this.props.index} item={this.props.item} />
}
}
export default Item;