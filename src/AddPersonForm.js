import React from 'react'

export default class AddPersonForm extends React.Component {
  addPerson() {
    const fname = this.refs.firstname.value
    const lname = this.refs.lastname.value
    const color = this.refs.personcolor.value

    // Placeholder
    console.log(fname, lname, color)
  }

  render() {
    return (
      <div>
        <h2>Add Person Form</h2>
        <form id='formAddPerson'>
          <input type="text" ref="firstname" placeholder="First Name" /><br />
          <input type="text" ref="lastname" placeholder="Last Name" /><br />
          <input type="color" ref="personcolor" /><br />
          <button type="button" onClick={this.addPerson.bind(this)}>
            Add Person
          </button>
        </form>
      </div>)
  }
}
