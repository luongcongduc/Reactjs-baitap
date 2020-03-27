import React, { Component } from 'react'
import data from './data.json';
import VePhim from './vephim'
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: data,
           
            mangGioHang: []
        }
    }
    handleGioHang = (sanPham) =>{
        // console.log(sanPham);
        const objSanPham = {
          maSP: sanPham.maSP,
         
          
          donGia: sanPham.giaBan,
          soLuong: 1
        }
      
        let mangGioHang = [...this.state.mangGioHang];
      
        // let index: tao 1 bien hứng lại kết quả
        let index = mangGioHang.findIndex((item) =>{
          return item.maSP === objSanPham.maSP;
        });
      
        if(index !== -1){
            //Tìm thấy (đã tồn tại)
            // Cập nhật số lượng
            mangGioHang[index].soLuong += 1;
        } else{
          // Thêm sản phẩm vào giỏ hàng
          mangGioHang = [...this.state.mangGioHang, objSanPham];
        }
         
        // let mangGioHang = [...this.state.mangGioHang, objSanPham];
      
        this.setState({
          mangGioHang // mangGioHang : mangGioHang 
        // }, () => {
        //   console.log(this.state.mangGioHang);
        });
      }
      
        //Tìm vị tri
        timViTri = (sanPham) => {
          return this.state.mangSanPham.findIndex(item => item.maSP === sanPham.maSP) // co dau ngoac nhọn thì trả về return,ko co dau ngoac nhọn thì bỏ return
        }
      
        // Tăng giảm số lượng
        handleTangGiamSL = (sanPham, status) =>{
          let index = this.timViTri(sanPham);
          let mangGioHang = [...this.state.mangGioHang];
          console.log(index)
          if(index !== -1 && status){
              // Tăng số lượng
             mangGioHang[index].soLuong += 1;
              
          } else{
            //Gia3m số lượng
            if(mangGioHang[index].soLuong > 0){
              mangGioHang[index].soLuong -= 1;
            }
              
          }
      
          this.setState({
            mangGioHang
          })
        };

           //Tính tồng số luong
    tinhTongSoLuong = () =>{
        let mangGioHang = [...this.state.mangGioHang];
        return mangGioHang.reduce((tong,sp) =>{
          return (tong += sp.soLuong);
        }, 0);
      }
    render() {
        return (
            <div>
                <VePhim  mangGioHang={this.state.mangGioHang} tangGiamSoLuong={this.handleTangGiamSL} />
            </div>
        )
    }
}
