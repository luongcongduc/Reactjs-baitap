import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { connect } from "react-redux"
class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userList: [
  //       {
  //         id: 1,
  //         name: "Dinh Phuc Nguyen",
  //         username: "dpnguyen",
  //         email: "dpnguyen@gmail.com",
  //         phoneNumber: "1123123213",
  //         type: "VIP"
  //       },
  //       {
//   //         id: 2,
//   //         name: "Nguyen Dinh Phuc",
//   //         username: "nguyendp",
//   //         email: "nguyendp@gmail.com",
//   //         phoneNumber: "1123123213",
//   //         type: "VIP"
//   //       }
//   //     ],
//   //     keyword: "",
//   //     userEdit : null
//   //   };
//   // }

//   handleOnSubmit = user =>{
//     if(user.id){
//       //UPDATE USER
//       /**
//        * 0. tạo mảng mới userList ,copy từ màng userList
//        * 1.Tìm vị trí cần update
//        * 2.userList[viTri] = user
//        * 3. Cập nhật lại State đễ render chạy lại
//        * 
//        */
//       let userList = [...this.state.userList];
//       let index = this.timViTri(user.id);
//       if(index !== -1){
//         userList[index] = user;
//       }
//       this.setState({
//         userList,
//         userEdit : user
//       })
//     } else{

//       // ADD USER
//       user.id = Math.random();
//       console.log(user.id);
//       let userList = [...this.state.userList, user];
//       this.setState({
//         userList

//     }

     
//       )
//   }}

//   //tim vi tri
//   timViTri = id =>{
//     return this.state.userList.findIndex(user => user.id === id);
//   }
//   // chuc nang xoa
//   handleDelete = user =>{
//     console.log(user);
//     let userList = [...this.state.userList];
//     let index = this.timViTri(user.id);
//     if(index !== -1){
//       userList.splice(index,1);
//     }
//     this.setState({
//       userList
//     })
//   }
//   // chuc nang tìm kiém
//   handleSearch = keyword =>{
//     console.log(keyword);
//     this.setState({
//       keyword
//     })
//   }

//   handleGetUserEdit =user=>{
// console.log(user);
//     this.setState({
//       userEdit : user
//     })
//   }
  render() {
    // let {userList,keyword} = this.state;
    // userList = userList.filter(user =>{
    //   return user.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    // })
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management Redux</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search keyword={this.handleSearch}/>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUserRedux"
            onClick ={() =>{
              // this.setState({
              //   userEdit : null
              // })
             this.props.onEdit();
            }}
          >
            Add User
          </button>
        </div>
        <Users /* listUser={userList} */ 
        // delete={this.handleDelete} 
        // getUserEdit={this.handleGetUserEdit}
        />
        <Modal /* onSubmit={this.handleOnSubmit} *//*userEdit={this.state.userEdit}*/></Modal> 
        />
      </div>
    );
  }
}

const mapdispatchToProps = dispatch =>{
  return {
    onEdit : user =>{
      let action = {
        type: "EDIT_USER",
        user : null
      };
      dispatch(action);
    }
  };
};
export default connect(null,mapdispatchToProps) (Home);
