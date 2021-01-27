import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from '../congrats';
import Clock from './clock';
import Tabs from './tabs'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Clock/>, root);
  const tabs = [{title: 1, content: 'some content'}, {title: 2, content: 'some 2 content'}, {title: 3, content: 'some 3 content'}];
  ReactDOM.render(<Tabs tabs={tabs}/>, root);
});
