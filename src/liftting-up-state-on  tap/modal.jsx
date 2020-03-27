import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Modal extends Component {


    renderGiohang = () => {
        let { handgiohang, handXoaGioHang, handTangGiamSoLuong, giohang } = this.props;
        return this.props.gioHang.map((item, index) => {
            return (
                <tbody>

                    <tr key={index}>
                        <td>
                            {item.maSP}
                        </td>
                        <td>
                            {item.tenSP}
                        </td>
                        <td>
                            <img src={item.hinhAnh} width={50} height={75} />
                        </td>
                        <td>
                            <button onClick={() => { this.props.handTangGiamSoLuong(item.maSP, true) }}>+</button>
                            {item.soLuong}
                            <button onClick={() => { this.props.handTangGiamSoLuong(item.maSP, false) }}>-</button>
                        </td>
                        <td>
                            {item.giaBan.toLocaleString()}
                        </td>
                        <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
                        <button className="btn btn-danger" onClick={() => { this.props.handXoaGioHang(item.maSP) }}>Xoa</button>
                    </tr>




                </tbody>

            )




        })
    }
    render() {

        return (

            <div>

                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ maxWidth: "800px", width: "800px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Gio HANG</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Ma sp</td>
                                                    <td>Ten san pham</td>
                                                    <td>hình ảnh</td>
                                                    <td>số lượng</td>
                                                    <td>don giá</td>
                                                    <td>thành tiền</td>

                                                </tr>
                                            </thead>

                                            {this.renderGiohang()}

                                            <tfoot>
                                                <tr>
                                                    <td colSpan="5"></td>
                                                    <td>TOTAL</td>
                                                    <td>
                                                        {
                                                            this.props.handgiohang.reduce((tongtien, item, index) => {
                                                                return tongtien += item.soLuong * item.giaBan
                                                            }, 0).toLocaleString()
                                                        }

                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>


                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapSateToProps = state =>{
    return {
        gioHang : state.giohangreducer.gioHang,
        detaiproduct : state.giohangreducer.detaiproduct
    }
}

export default connect(mapSateToProps,null)(Modal)