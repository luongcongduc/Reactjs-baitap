import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../redux/action/index'
class SanPham extends Component {
  

    render() {
        let { sanpham,sanphamchon ,mangSP,themgioHang,sanphammodal} = this.props;
        
        return (
            <div className="col-sm-4">
                <div className="card ">
                  <img className="card-img-top" src={sanpham.hinhAnh} alt=""  />
                  <div className="card-body">
                    <h4 className="card-title">{sanpham.tenSP}</h4>
                    <button className="btn btn-danger" onClick={() =>{this.props.themgioHang(sanpham)}}>nut chon</button>
                  </div>
                </div>
            </div>
        );
      

    }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      themgioHang:(sanpham) =>{
          const  sanphamchon = {
                 maSP: sanpham.maSP,
                 tenSP :sanpham.tenSP,
                 hinhAnh : sanpham.hinhAnh,
                 giaBan: sanpham.giaBan,
                 soLuong: 1

            }
          //   them_SP:(sanphamchon) =>{
          //     dispatch(action.them_SP(sanphamchon))

      //    }
      //tạo action dua du lieu len reducer
      const action = {
          type: "THEM_SP",
          sanphamchon: sanphamchon
      }
      console.log(action);
      dispatch(action);
  }  
         } 
         
}
export default connect(null,mapDispatchToProps) (SanPham);