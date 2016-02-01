import React from 'react'

export default class Person extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.person.firstName} {this.props.person.lastName}</h3>
      </div>)
  }
}
