import React from 'react'
import Person from './Person'
export default class PersonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {personList: null};
  }

  loadCommentsFromServer() {
    // ToDo: Create Server Backend
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   success: (data) => {
    //     this.setState({personList: data});
    //   },
    //   error: (xhr, status, err) => {
    //     console.error(this.props.url, status, err.toString());
    //   }
    // });

    // Temporary testing data
    this.setState({personList:
      [
        {id: 0, firstName: 'Anthony', lastName: 'Rinaldi'},
        {id: 1, firstName: 'John', lastName: 'Smith'},
        {id: 2, firstName: 'Barry', lastName: 'O\'Sullivan'}
      ]
    })
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), 500);
  }

  mapPersonList() {
    if (Array.isArray(this.state.personList)) {
      return(this.state.personList.map((person) => {
        return (<Person person={person} key={person.id} />)
      }))
    }
  }

  render() {
    return (
      <div>
        <h2>Person List</h2>
        {this.mapPersonList()}
      </div>)
  }
}
