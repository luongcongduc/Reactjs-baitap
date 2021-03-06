import React, { Component } from "react";

export default class Modal extends Component {

  renderTable = () =>{
    return this.props.mangGioHang.map((item,index) =>{
      return(
        <tr>
            <td>{item.maSP}</td>
            <td>{item.tenSP}</td>
            <td><img src={item.hinhAnh} alt="" width="50" /></td>
            <td>
              
                {/* {item.soLuong} */}
                <button onClick={() => { this.props.tangGiamSoLuong(item,false)}}>-</button>
                {item.soLuong}
                <button onClick={() => { this.props.tangGiamSoLuong(item,true)}}>+</button>
              
            </td>
            {/* <td>{item.soLuong}</td> */}
            <td>{item.donGia}</td>
            <td>{item.donGia*item.soLuong}</td>
            <td>
              <button className="btn btn-danger" onClick={() => {this.props.delete(item)}}>Delete</button>
            </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td>1</td>
                    <td>VinSmart Live</td>
                    <td>
                      <img src="./img/vsphone.jpg" width={50} alt="" />
                    </td>
                    <td>
                      <button>-</button>1<button>+</button>
                    </td>
                    <td>5700000</td>
                    <td>5700000</td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr> */}
                  {this.renderTable()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
