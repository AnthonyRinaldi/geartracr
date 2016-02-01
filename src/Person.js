import React from 'react'

export default class Person extends React.Component {
  render() {
    return (
      <div>
        <strong>{this.props.person.firstName} {this.props.person.lastName}</strong>
      </div>)
  }
}
