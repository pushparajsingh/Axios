import React, { Component } from 'react'

export default class register extends Component {
  render() {
    return (
      <>
        <td>{this.props.data.username}</td>
        <td>{this.props.data.email}</td>
        <td>{this.props.data.password}</td>
      </>
    )
  }
}
