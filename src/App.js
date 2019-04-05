// Imports
//////////////////////////////////////////////////////////
import React, { Component } from 'react'
import './App.css'
import './apod-archive-urls.txt'


// The main component that displays the APOD image
class MyComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      url: null,
    }
  }

	chooseRandomAPOD() {
	  let image = () => {
		  5
		} 
	}
 
  render() {
    
    const { error, isLoaded, items, url} = this.state;
    
    if (error) {
      return <div>Error: {this.state.error.message}</div>
    }
    
    else if (!isLoaded) {
      return <div></div>
    }
    
    else {
      return (
        <div>
          <img src={this.state.url} />
        </div>
      )
    }
  }
}


// App 
class App extends Component {
  render() {
    return (
      <div className='app'>
			  <MyComponent />
      </div>
    );
  }
}
// Export the app for the rest of the program to use
export default App;
