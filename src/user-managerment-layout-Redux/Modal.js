import React, { Component } from "react";
import {connect} from "react-redux";
import * as action from "./../redux/action";
class Modal extends Component {
  constructor(props){
    super(props);
    this.state={
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type:"USER"
    }
    console.log("constructor");
  }
//  static getDerivedStateFromProps(props,state){
//       if(props.userEdit !== state.userEdit){
//         return {...state, state : props.userEdit }
//       }
//        return state;
    
//   }
  componentWillReceiveProps(nextProps){
    //Nếu props thay đổi từ cha truyền vô là chạy
    // console.log("componentWillReceiveProps");
    console.log(nextProps);
    if(nextProps && nextProps.userEdit){
      // UPDATE USER
      this.setState({
        id : nextProps.userEdit.id,
        username : nextProps.userEdit.username,
        name : nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber : nextProps.userEdit.phoneNumber,
        type : nextProps.userEdit.type
      })
    }
    else{
      // ADD USER
      this.setState({
        id: "",
        userName: "",
        name: "",
        email: "",
        phoneNumber: "",
        type:"USER"
      })
        
      
    }
  }

  handleChange =(event)=>{
    console.log(event.target.value);
    let target = event.target;
    let value = target.value;
    let name = target.name;
    let user = target.user
    this.setState({
      [name] : value
    })
  }

  handleSubmit =(event) =>{
    event.preventDefault();// ko cho su kien lap lai
    console.log(this.state);
    // this.props.onSubmit(this.state);
    this.props.onSave(this.state);
  }
 
  render() {
    console.log("render");
    return (
      
      <div
        className="modal fade"
        id="modelIdUserRedux"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title">ADD USER</h5> su dung toán tử 3 ngôi */}
              {/* <h5 className="modal-title">/*{this.props.userEdit ? "Edit User" : "Add User"} </h5>  */}
              <h5 className="modal-title"> {this.props.userEdit ? "Edit User" : "Add User"} </h5> 
              <button
                type="button"
                className="close"
                data-dismiss="modal"  
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" onChange={this.handleChange} 
                  value={this.state.username} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" onChange={this.handleChange}
                  value={this.state.name}/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.handleChange} 
                  value={this.state.email}/>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" onChange={this.handleChange} 
                  value={this.state.phoneNumber}/>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" onChange={this.handleChange}
                  value={this.state.type} name="type">
                    <option>USER</option>
                    <option>VIP</option> 
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    userEdit : state.userReducer.userEdit
  };
}
const mapDispatchToProps = dispatch =>{
    return {
      onSave : (user) =>{
        // let action ={
        //   type : "ON_SAVE",
        //   // user : user 
        //   user
        // }
        dispatch(action.onSave(user));
      },
     
}
}
export default connect(mapStateToProps,mapDispatchToProps) (Modal);
