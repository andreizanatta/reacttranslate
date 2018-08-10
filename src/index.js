import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import HelloWorld from './HelloWorld'
import PropsValidation from './PropsValidation'
import Events from './Events'
import Translate from './Translate';

ReactDOM.render(
  //<HelloWorld txt = 'HelloWorld React JS'/>,
  //<PropsValidation name="Andrei" age="21" height="1.75"/>,  
  //<Events/>,
  <Translate/>,
  document.getElementById("root")
)

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
