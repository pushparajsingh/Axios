import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import Data from './register'
import { Table } from 'react-bootstrap'

export default class Service extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[],
       stringone:"",
       stringtwo:"",
       stringthree:"",
    
    }
    this.changeone =  this.changeone.bind(this);
    this.changetwo =  this.changetwo.bind(this);
    this.changethree = this.changethree.bind(this);
    this.setData = this.setData.bind(this);
  }

  changeone(val)
  {
    this.setState({stringone:val.target.value})
  }
  changetwo(val)
  {

    this.setState({stringtwo:val.target.value})
  }
  changethree(val)
  {
    this.setState({stringthree:val.target.value})
  }
  setData(e)
  {
    e.preventDefault();
    console.log("call setData");
    let obj = {};
    obj.username = this.state.stringone;
    obj.email = this.state.stringtwo;
    obj.password = this.state.stringthree;
    let obj2 = this.state.data;
    obj2.push(obj);
    this.setState({data:obj2});
    
  }
  
  render() {
    return (
      <div style={{background:"url('./img.jpg') no-repeat center", backgroundSize:"cover", marginTop:"0px"}}>
       <center>
        <Form className='col-5  '>
        <Form.Group className="mb-3" controlId="formBasicUsername">
    <Form.Label><h2><b>Username</b></h2></Form.Label>
    <Form.Control type="text" placeholder="Username" onChange={this.changeone}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><h2><b>Email address</b></h2></Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={this.changetwo}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><h2><b>Password</b></h2></Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={this.changethree}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={this.setData}>
    Submit
  </Button><br/><br/>
</Form>


</center>
<h1 style={{color:"red"}}>Show Data</h1>
     <Table striped bordered hover className='container'>
  <thead>
    <tr>
      <th>Username</th>
      <th>Email</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
{this.state.data.map((item,index)=>{
  return(
    <tr key={index}>
<Data data ={item}/>
    </tr>
  )
})} 
</tbody>
</Table>
      </div>
    )
  }
}
