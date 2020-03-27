import React, { Component } from "react";

export default class FormValidation extends Component {
    constructor(props){
        super(props);
        this.state={
            values : {
                manv:"",
                tennv:"",
                email:"",
            },
            errors: {
                manv:"",
                tennv:"",
                email:"",
            },

            formValid : false ,
            manvValid : false,
            tennvValid: false,
            emailValid: false
        };
    }

    handleOnChange =(event)=>{
        let {name, value} = event.target;
        // let target = event.target;
        // let value = target.value;
        //  let name = target.name;
        this.setState({
            values :{...this.state.values, [name]:value}
        },
        ()=>{
            console.log(this.state);
        })
    }

    handleErrors =(event) =>{
        let {name, value} = event.target;
        // console.log(name,value);
        // viet toan tu 3 ngoi, neu value rỗng thì đúng, nguoc lai là sai
        let message =  value === "" ? name + " khong duoc rỗng" : "";
        let {manvValid, tennvValid, emailValid} = this.state;
        switch (name){
            case "manv":
                manvValid = message === "" ? true : false;
                if(value && value.length < 4){
                    message = "do dài lon hon 4 kí tự";
                    manvValid = false

                }
                break;
            
            case "tennv":
                tennvValid = message === "" ? true : false;
                break;

            case "email":
                emailValid = message === "" ? true : false;
                if(value && ! value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                    message = "email ko hop le";
                    emailValid = false
                }
                break;
        }
       this.setState({
           // value: la message
           errors: {...this.state.errors, [name]: message},
           manvValid,
           tennvValid,
           emailValid
           
       } ,()=>{
           this.FormValidation();
           console.log(this.state);
       })
        
    }

    FormValidation = () =>{
        this.setState({
            formValid : this.state.manvValid && this.state.tennvValid && this.state.emailValid
        },()=>{
            console.log(this.state);
        })
    }
  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form>
          <div className="form-group">
            <label>MÃ NHÂN VIÊN</label>
            <input type="text" className="form-control" name="manv" 
            onChange={this.handleOnChange} 
            onBlur={this.handleErrors} 
            onKeyUp={this.handleErrors}/>
  {this.state.errors.manv === "" ? "" : (<div className="alert alert-danger">{this.state.errors.manv}</div>)}        
            
          </div>
          <div className="form-group">
            <label>TÊN NHÂN VIÊN</label>
            <input type="text" className="form-control" name="tennv"
             onChange={this.handleOnChange}
             onBlur={this.handleErrors} 
             onKeyUp={this.handleErrors}/>
             {this.state.errors.tennv === "" ? "" : (<div className="alert alert-danger">{this.state.errors.tennv}</div>)} 
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="email" onChange={this.handleOnChange}
            onBlur={this.handleErrors}
            onKeyUp={this.handleErrors}/>
            {this.state.errors.email === "" ? "" : (<div className="alert alert-danger">{this.state.errors.email}</div>)} 
          </div>
          <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}