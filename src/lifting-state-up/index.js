import React, { Component } from 'react'
import DanhSachSanPham from './danh-sach-san-pham';

export default class LiftingStateUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h3 className="title"> LiftingStateUp</h3>
                <DanhSachSanPham />
            </div>

        )
    }
}
