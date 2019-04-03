// Imports
//////////////////////////////////////////////////////////
import React, { Component } from 'react';
import './App.css';


// 🏆 🚫 ✔️ 🔥 ❓ 💭 📍 
//////////////////////////////////////////////////////////


// Params
//////////////////////////////////////////////////////////
// This is where global constants go

const canary = '🐤';


// Functions
//////////////////////////////////////////////////////////

// Canary that goes away if there are breaking errors
function Canary() {
  return <div className='canary' >{canary}</div>;
}

class Thing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	// stuff goes here
    }
  }
}






// App 
//////////////////////////////////////////////////////////
class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="app-header">
					<Canary />
			    <h1>Hello Universe</h1>
				</div>
				<div className='app-body'>
          <p>
						Stuff goes here
          </p>
				</div>
      </div>
    );
  }
}

// Export the app for the rest of the program to use
export default App;
