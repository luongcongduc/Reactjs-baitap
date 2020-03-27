import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux"
class Users extends Component {
  renderHTML = () =>{
    let {listUser, keyword} = this.props;
    listUser = listUser.filter(user =>{
      return user.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    })
    // VIET KIEU NGAN GỌN 1 DÒNG KO CO DẤU NGOẶC NHỌN
    // listUser = listUser.filter(user =>
    //   return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // )
    return listUser.map((item,index) =>{
      return <UserItem key={index} user={item} delete={this.props.delete} 
      // getUserEdit={this.props.getUserEdit}
      
      />
    })
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderHTML()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    listUser : state.userReducer.userList,
    keyword : state.userReducer.keyword
  }
}

export default connect(mapStateToProps,null) (Users);
