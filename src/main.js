import React from 'react'
import ReactDOM from 'react-dom'
import PersonList from './PersonList'

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>GearTracr</h1>
        <PersonList />
      </div>)
  }
}

ReactDOM.render(<Content />, document.getElementById('content'));
