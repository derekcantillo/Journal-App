import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { JournalApp } from './JournalApp';
import './styles/styles.scss'

ReactDOM.render(
<BrowserRouter>
<JournalApp />
</BrowserRouter>,

  document.getElementById('root')
);

