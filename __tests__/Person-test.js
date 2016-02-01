// __tests__/Person-test.js
jest.dontMock('../src/Person');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Person = require('../src/Person');

const testPerson = {id: 87, firstName: 'John', lastName: 'Smith'}

describe('Person', () => {

  it('Renders the Person\'s Information', () => {

    let person = TestUtils.renderIntoDocument(
      <Person person={testPerson} />
    );

    let personNode = ReactDOM.findDOMNode(person);

    console.log(personNode);

    expect(personNode.textContent).toEqual('Off');
  });

});
