import React from 'react';
import {render} from 'react-dom';
import Test from './Test/test';
//import Main from './main';

class App extends React.Component {
  render(){
    return(
      <div className="body">

                  <Test />

          </div>
    );
  }
}

export default App;
