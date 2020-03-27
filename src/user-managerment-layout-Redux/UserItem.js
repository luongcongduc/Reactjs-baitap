import React, { Component } from "react";
// import Users from './Users'
import {connect} from "react-redux";
import * as action from "./../redux/action"
class UserItem extends Component {
  render() {
    let {user}= this.props
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUserRedux"
            onClick={() =>
              // {this.props.getUserEdit(user)}}
             {this.props.onEdit(user)} }
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={()=>{this.props.delete(user)}}>Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDispatcherToProps = dispatch =>{
  return {
    delete: (user)=>{
    // let action {
    //   type: DELETE;
    //   user: user;
    // }
    // dispatch(action)

    // viet tẮT
      dispatch( action.deleteUser(user))
      //   type: "DELETE",
      //   user//user : user giong nhau thi lay 1
      // });

    },
    onEdit : (user) =>{
      // let action = {
      //   type: "EDIT_USER",
      //   user
      // };
      dispatch(action.editUser(user))
    }
  }
}
export default connect(null,mapDispatcherToProps) (UserItem);
