import React from 'react';
import ReactDOM from 'react-dom';
//import App from './Components/App/App';
import Route from './Components/Route';
import './reset.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Route />, document.getElementById('root'));
registerServiceWorker();
