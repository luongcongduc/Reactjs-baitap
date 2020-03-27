import React, { Component } from "react";

class Modal extends Component {
  constructor(props){
    super(props);
    this.state={
      values:{
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type:"USER"
      },
      errors :{
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type:"USER"
      }
      
    }
    console.log("constructor");
  }

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
        type:"",
        option:''

      })
        
      
    }
  }
 
  handleChange =(event)=>{
    console.log(event.target.value);
    let target = event.target;
    let value = target.value;
    let name = target.name;

    let errorMessage = ''
    this.setState({
      [name] : value
    })

    // neu go sai thi bao loi
    //kiem tra bat ki control input nao nguoi dung nhap vao deu kiem tra rong
    if(value === '') {
      errorMessage = name + 'khong duoc bo trong'
    }
    let values = {...this.state.values,[name]:value};
    let errors=  {...this.state.errors,[name]:errorMessage};
    this.setState({
      values: values,
      errors: errors
    },()=>{
      console.log(this.state);
    })
  }

  handleSubmit =(event) =>{
    event.preventDefault();// ko cho su kien lap lai
    console.log(this.state);
    this.props.onSubmit(this.state);
  }

  render() {
    console.log("render");
    return (
      
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title">ADD USER</h5> su dung toán tử 3 ngôi */}
              <h5 className="modal-title">{this.props.userEdit ? "Edit User" : "Add User"}</h5> 
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
                  value={this.state.values.username} />
                  <p className="text-danger">{this.state.errors.username} </p>
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" onChange={this.handleChange}
                  value={this.state.values.name}/>
                    <p className="text-danger">{this.state.errors.name} </p>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.handleChange} 
                  value={this.state.values.email}/>
                    <p className="text-danger">{this.state.errors.email} </p>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" onChange={this.handleChange} 
                  value={this.state.values.phoneNumber}/>
                    <p className="text-danger">{this.state.errors.phoneNumber} </p>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" onChange={this.handleChange} name="option"
                  value={this.state.values.type} >
                      <p className="text-danger">{this.state.errors.type} </p>
                    <option value={1}>USER</option>
                    <option value={2}>VIP</option> 
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

export default Modal;
