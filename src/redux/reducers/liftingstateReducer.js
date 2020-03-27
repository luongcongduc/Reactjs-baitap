import * as ActionType from '../contants/ActionType'
import data from './data.json';
let inittialState = {
    gioHang : data,
    detaiproduct : data [0],
}

const giohangreducer = (state = inittialState, action) =>{
    switch (action.type) {
        case action.THEM_SP:
    
         let Giohangcapnhat = [...state.gioHang];
         let index = Giohangcapnhat.findIndex((sp) => sp.maSP === action.sanphamchon.maSP);
         if(index !== -1){
             Giohangcapnhat[index].soLuong += 1
         } else{
             Giohangcapnhat.push(action.sanphamchon);
         }
         state.gioHang = Giohangcapnhat
            return{...state};
    
        default:
            break;
    }
    
    return {...state}
}

export default giohangreducer