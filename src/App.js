import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
  return (
    <div>
      <Search />
    </div>
  )
};