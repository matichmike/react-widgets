import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Route from './components/Route';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JS framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How to use React?',
    content: 'You use React by creating reusable components'
  }
]

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'The color blue',
    value: 'blue'
  }
];


export default () => {
const [selected, setSelected] = useState(0);
  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown 
        label="Select a color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
};