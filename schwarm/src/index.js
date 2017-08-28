import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const data = require('./data.json')

ReactDOM.render(<App data={data}/>, document.getElementById('root'));