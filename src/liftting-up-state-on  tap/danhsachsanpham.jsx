import React, { Component } from 'react';
import SanPham from './sanPham'
import data from './data.json';
import {connect} from 'react-redux';
import * as action from '../redux/action/index'
class DanhSachSanPham extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         // mangSP : data,
    //         // detaiproduct : data [0],
    //     }
    // }
  
    changClick = (sanpham) =>{
        this.setState({
            detaiproduct: sanpham
        })
    }
    renderHTML = () =>{
        return this.props.gioHang.map((item,index) =>{
            return <SanPham key={index} sanpham={item} changClick={this.changClick}
            themgioHang={this.props.themgioHang}
            />
        })
    }
    render() {
        let {detaiproduct,sanpham} = this.props;
        return (
            <div className="container">
                <div className="img-fluid" className="row">
                    {this.renderHTML()}
                </div>
                <div className="row ">
                    <div className="col-sm-5">
                        <img src={detaiproduct.hinhAnh} />
                    </div>
                    <div className="col-sm-7">
                        <h2>Thong so ky thuât</h2>
                        <table className="table table-bordered">
                            <tbody>
                            <tr>
                            <td>man hinh </td>
                            <td>{detaiproduct.manHinh}</td>
                        </tr>
                        <tr>
                            <td>heDieuHanh </td>
                            <td>{detaiproduct.heDieuHanh}</td>
                        </tr>
                        <tr>
                            <td>cameraTruoc</td>
                            <td>{detaiproduct.cameraTruoc}</td>
                        </tr>
                        <tr>
                            <td>giaBan</td>
                            <td>{detaiproduct.giaBan}</td>
                        </tr>
                            </tbody>
                        </table>
                       
                    </div>
                </div>
            </div>
        );
    }
}

    const mapSateToProps = state =>{
        return {
            gioHang : state.giohangreducer.gioHang,
            detaiproduct : state.giohangreducer.detaiproduct
        }
    }

    // const mapDispatchToProps = (dispatch) =>{
    //     return{
    //         themgioHang:(sanpham) =>{
    //             const  sanphamchon = {
    //                    maSP: sanpham.maSP,
    //                    tenSP :sanpham.tenSP,
    //                    hinhAnh : sanpham.hinhAnh,
    //                    giaBan: sanpham.giaBan,
    //                    soLuong: 1
      
    //               }
    //             //   them_SP:(sanphamchon) =>{
    //             //     dispatch(action.them_SP(sanphamchon))

    //         //    }
    //         //tạo action dua du lieu len reducer
    //         const action = {
    //             type: "THEM_SP",
    //             sanphamchon: sanphamchon
    //         }
    //         dispatch(action);
    //     }  
    //            } 
               
    // }
export default connect(mapSateToProps,null) (DanhSachSanPham);