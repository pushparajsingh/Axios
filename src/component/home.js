import React, { Component } from 'react'
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'
import Update from './update'


export default class Home extends Component {
constructor(props) {
  super(props)
  this.state = {
     post:[],
     newname:""
  }
  this.change = this.change.bind(this);
  this.addpost = this.addpost.bind(this);
  this.delete = this.delete.bind(this);
  this.update = this.update.bind(this);
 }

change(e)
{
  console.log(e.target.value);
  this.setState({newname: e.target.value});
}
addpost()
{
 
  const name = this.state.newname
  console.log("999",name)
  axios.post('https://629dae743dda090f3c07dd7f.mockapi.io/post',{name})
      .then(response => {
        console.log(response.data);
      });
      let a = {name:name}
      console.log("911",a)
 let b = this.state.post.concat(a);
 this.setState({post:b});
}
componentDidMount()
  {
 axios.get("https://629dae743dda090f3c07dd7f.mockapi.io/fakeapi")

 .then((result)=>
 {this.setState({post:result.data});
 console.log("first",result.data)});
  }

  delete(id)
  {
    console.log("hello");
    axios.delete(`https://629dae743dda090f3c07dd7f.mockapi.io/fakeapi/${id}`).then((result)=>{
    console.log(result);
    })
    let obj = this.state.post.filter( item => {
      if(item.id != id)
      {
          return item;
      }})
    this.setState({post:obj});
  }
  update(id,val)
  {
    const name = {name:val};  
  axios.put(`https://629dae743dda090f3c07dd7f.mockapi.io/fakeapi/${id}`,name).then((result)=>{
  console.log(result.data)
})

    const a = this.state.post.find( item => item.id==id)
         a.name= val;
    const b = this.state.post.map( item => {
      if(item.id == id)
      {
       return a
      }
      else{
         return item
      }
    })

    this.setState({post:b});
  }


  render() {
    return (
      
<>
        <input type={"text"} onChange={this.change}/> &nbsp;&nbsp;
        <Button variant="primary" onClick={this.addpost}>Addpost</Button><br/><br/>
<Table striped bordered hover className='container'>
  <thead>
    <tr>
      <th>ID</th>
      <th> Name</th>
      <th>Photo's</th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.post.map((item,index) => {
        return(
          <tr key={index}>
         <Update data={item} delete={this.delete} update={this.update}/>
          </tr>
        )
      })
    }
  </tbody>
</Table>
      </>
    )
  }
}
