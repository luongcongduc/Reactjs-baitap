import React, { Component } from 'react';
import DanhSachSanPham from './danhsachsanpham'
import Modal from './modal'
import data from './data.json'
class Index extends Component {

    constructor(props){
        super(props);
        this.state={
            giohang :[
                {
                    "maSP": 1,
                    "tenSP": "VinSmart Live",
                  
                   
                    
                    "hinhAnh": "./img/vsphone.jpg",
                    
                    "giaBan": 5700000,
                    "soLuong": 1,
                }
            ],
            // mangSP : data,
            // GiohangCapNhat:[]
       
        }
    }

    //Thêm sản phẩm
    AddModal = (sanphamchon) =>{
        console.log(sanphamchon);
        // b1: từ sản phẩm dược chọn tạo ra san phẩm giỏ hàng
        let mangGioHang = {
            maSP : sanphamchon.maSP,
            tenSP: sanphamchon.tenSP,
            
            hinhAnh : sanphamchon.hinhAnh,
            giaBan: sanphamchon.giaBan,
            soLuong: 1
        }

        // kiem tra san pham chon co trong gio hang chua
        let GiohangCapNhat = [...this.state.giohang];
        let index = GiohangCapNhat.findIndex((sp) => sp.maSP === mangGioHang.maSP);
        if(index !== -1){
            // sản phẩm được click da tồn tai trong this.state.gioHang
            GiohangCapNhat[index].soLuong += 1;
        } else{
            // san phẩm duoc click chưa có trong this.state.giohang
            GiohangCapNhat.push(mangGioHang);
          

        }
        // setState de component render lai
        this.setState({
            giohang : GiohangCapNhat
        })
    }

    //đat sự kien xoa giỏ hàng 
    handXoaGioHang =(maSP) =>{
        //cach1: tim trong giỏ hang co sp chứa masp duoc click thì xóa
        // let GiohangCapNhat = [...this.state.giohang];
        // let index = GiohangCapNhat.findIndex((sp) => sp.maSP === maSP);
        // if(index !== -1){
        //     GiohangCapNhat.splice(index,1);
        // }

        // Cách 2:
        let GiohangCapNhat = this.state.giohang.filter((sp) => sp.maSP !== maSP);
        //cập nhat lai state giỏ hàng và render giao dien
        this.setState({
            giohang:GiohangCapNhat
        })
    }

    //Tăng giảm số lượg , tang giảm === true: tăng số luong, false là giảm số lượng
    handTangGiamSoLuong = (maSP,tanggiam) =>{
        let GiohangCapNhat =[...this.state.giohang];
        let index = GiohangCapNhat.findIndex((sp) => sp.maSP === maSP);
        // xu ly tang giảm so luong
        if(tanggiam){
            GiohangCapNhat[index].soLuong += 1;
        } else 
        if( GiohangCapNhat[index].soLuong > 1){
           GiohangCapNhat[index].soLuong -= 1;
        }
        // cap nhat lai state va render giao dien
        this.setState({
            giohang : GiohangCapNhat
        })
    }
    render() {

        let {giohang} = this.state;
        let tongSoLuong = giohang.reduce((tsl,sanpham) =>{
            return tsl += sanpham.soLuong;
        },0)
        return (
            <div >
                <div className="container">
                {/* <button
            className="btn btn-danger"
            data-toggle="modal" data-target="#modelId"
          >
            Giỏ hàng 
          </button> */}
          <Modal 
          handgiohang={giohang} handXoaGioHang={this.handXoaGioHang} handTangGiamSoLuong={this.handTangGiamSoLuong}
          
        
          />
             <div className="text-right">
             <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId" >
           Launch ({tongSoLuong})
</button>
           </div>
          
                </div>
                
                
            
                <DanhSachSanPham AddModal={this.AddModal}/>
            </div>
        );
    }
}

export default Index;