import {arrayMove} from 'react-sortable-hoc';
import List from './list';
import React, {Component} from 'react';
// import img from '../../public/img/'
export default class IndexList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    // items:[
    //     '../../public/img/logo.jpg',
    //     '../../public/img/it_lenovo.png'
    // ]
    }
  }

  render() {
    return (
      <List items={this.state.items} onSortEnd={this.onSortEnd.bind(this)} />
    );
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  }
}