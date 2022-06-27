import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first: ""
    }
    this.change = this.change.bind(this)
  }
  change(val) {
    this.setState({ first: val.target.value });
  }
  render() {
    return (
      <>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}<br /><br /><input type="text" width="50" onChange={this.change} />&nbsp;&nbsp;
        <Button variant="danger" onClick={()=> this.props.delete(this.props.data.id)}>Delete</Button>&nbsp;&nbsp;
        <Button variant="success" onClick={()=>this.props.update(this.props.data.id, this.state.first)}>Update Post</Button></td>
        <td><img src={this.props.data.avatar} alt="" /></td>

      </>
    )
  }
}
