import React from 'react';
import ReactDOM from 'react-dom';
import PageHome from './PageHome';

it('PageHome renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageHome />, div);
});