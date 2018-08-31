import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {hashrouter} from 'react-router-dom';


ReactDOM.render(<hashrouter><App /></hashrouter>, document.getElementById('root'));
registerServiceWorker();