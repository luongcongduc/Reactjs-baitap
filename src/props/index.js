import React, { Component } from 'react'
// import classProp from './classProp'
import ClassProp from './classProp'
// Props truyen du lieu tu cha sang con
import FunctionProps from './functionProps'
export default class Props extends Component {
    name="duc";
    render() {
        return (
            <div>
                <h3 className="title">*Props</h3>
                <ClassProp name={this.name} />
                <ClassProp name="ducvidai" />
                <FunctionProps username={this.name}/>
            </div>
        )
    }
}
