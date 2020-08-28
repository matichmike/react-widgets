import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown'

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
  return (
    <div>
      <DropDown options={options} />
    </div>
  )
};