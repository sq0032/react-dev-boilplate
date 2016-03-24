import React from 'react';
import { render } from 'react-dom';
import PitchSection from './components/PitchSection';

const pitches = [
  {
    id:1,
    link:"8UZA_YijTos",
    name:"Jamii First Pitch",
    order:1,
    requirement:"test",
    thread:1,
    type:"firstpitch",
  },
  {
    id:24,
    link:"8UZA_YijTos",
    name:"Jamii Second Pitch",
    order:2,
    requirement:"",
    thread:37,
    type:"secondpitch",
  }
];

let rootElement = document.getElementById('app')
render(
  <PitchSection pitches={pitches}/>,
  rootElement
)
