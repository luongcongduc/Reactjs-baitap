import React, { Component } from 'react'
import data from './data.json'; 
export default class VePhim extends Component {


  renderTable = () =>{
    return this.props.mangGioHang.map((item,index) =>{
      return(
        <tr>
            <th>{item.maSP}</th>
          
            <th>
              
                {/* {item.soLuong} */}
                <button onClick={() => { this.props.tangGiamSoLuong(item,false)}}>-</button>
                {item.soLuong}
                <button onClick={() => { this.props.tangGiamSoLuong(item,true)}}>+</button>
              
            </th>
            {/* <td>{item.soLuong}</td> */}
            <th>{item.donGia}</th>
            <th>{item.donGia*item.soLuong}</th>
            {/* <td>
              <button className="btn btn-danger" onClick={() => {this.props.delete(item)}}>Delete</button>
            </td> */}
        </tr>
      )
    })
  }
    render() {
        return (
            <div>
                <div className="bang">
  <div className="container row ">
    <div className="col-sm-9">
      <h2>CHỌN VÉ/THỨC ĂN</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Loại vé</th>
            <th scope="col">Số Lượng</th>
            <th scope="col">Gía(VND)</th>
            <th scope="col">Tổng(VND)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              Ve 2D Sau 22h
              <br />
              Vé 2d chỉ ap dung sau 22h
            </th>
            {<th>
              <button>-</button>
              <input style={{ width: 25 }} />
              <button>+</button>
            </th>}
            <th>50.000</th>
            {/* <td>@mdo</td> */}
          </tr>
        </tbody>
      </table>
      <h2>Tổng</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Combo</th>
            <th scope="col">Số Lượng</th>
            <th scope="col">Gía(VND)</th>
            <th scope="col">Tổng(VND)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <div>
                <img
                  src="./img/01-combo-1-72k_1557385053041.png"
                  width="100px"
                />
              </div>
              <div>
                <p>sdssdsdsd</p>
                <br />
                <p>
                  1 BẮP (NGỌT) + 1 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)
                </p>
              </div>
            </th>
            <th>
             {/* {this.renderTable()} */}
            </th>
            <th>50.000</th>
            {/* {this.tinhTongSoLuong()} */}
            {/* <td>@mdo</td> */}
          </tr>
          <tr>
            <th scope="row">
              <div>
                <img
                  src="./img/01-combo-1-72k_1557385053041.png"
                  width="100px"
                />
              </div>
              <div>
                <p>sdssdsdsd</p>
                <br />
                <p>
                  1 BẮP (NGỌT) + 1 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)
                </p>
              </div>
            </th>
            <th>
              <button>-</button>
              <input style={{ width: 25 }} />
              <button>+</button>
            </th>
            <th>50.000</th>
            {/* <td>@mdo</td> */}
          </tr>
          <tr>
            <th scope="row">
              <div>
                <img
                  src="./img/01-combo-1-72k_1557385053041.png"
                  width="100px"
                />
              </div>
              <div>
                <p>sdssdsdsd</p>
                <br />
                <p>
                  1 BẮP (NGỌT) + 1 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)
                </p>
              </div>
            </th>
            <th>
              <button>-</button>
              <input style={{ width: 25 }} />
              <button>+</button>
            </th>
            <th>50.000</th>
            {/* <td>@mdo</td> */}
          </tr>
          <tr>
            <th scope="row">
              <div>
                <img
                  src="./img/01-combo-1-72k_1557385053041.png"
                  width="100px"
                />
              </div>
              <div>
                <p>sdssdsdsd</p>
                <br />
                <p>
                  1 BẮP (NGỌT) + 1 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)
                </p>
              </div>
            </th>
            <th>
              <button>-</button>
              <input style={{ width: 25 }} />
              <button>+</button>
            </th>
            <th>50.000</th>
            {/* <td>@mdo</td> */}
          </tr>
        </tbody>
      </table>
      <p>Tổng</p>
    </div>
    <div className="col-sm-3">
      <img src="./img/01-combo-1-72k_1557385053041.png" width="250px" />
      <p>JUMANJI: THE NEXT LEVEL</p>
      <h4>Trò chơi kì ảo thăng cấp</h4>
    </div>
  </div>
</div>

            </div>
        )
    }
}
