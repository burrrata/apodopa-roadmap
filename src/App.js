// Imports
///////////////////////////////////////////////////
import React, { Component } from 'react'
import './App.css'
import './apod-archive-urls.txt'


// The main component that displays the APOD image
//////////////////////////////////////////////////
class MyComponent extends React.Component {
  
	// init the state
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      url: null,
    }
  }

	// get a random APOD url from the APOD archive list
	getRandomAPOD() {
		// read from the txt file
		const readTextFile = file => {
			let rawFile = new XMLHttpRequest();
			rawFile.open("GET", file, false);
			rawFile.onreadystatechange = () => {
				if (rawFile.readyState === 4) {
					if (rawFile.status === 200 || rawFile.status === 0) {

						// do stuff
						let allText = rawFile.responseText;
						//console.log("allText: ", allText);
				
						let arr = allText.split('\n')
						let randomAPOD = arr[Math.floor(Math.random()*arr.length)]
						console.log(randomAPOD)

						// set the state
						this.setState({
							isLoaded: true,
							items: arr,
							url: randomAPOD,
						});
						//console.log(this.state)
					}
				}
			};
			rawFile.send(null);
    };

		// THIS JUST LOOPS FOREVER IN ERRORS
		//readTextFile('./apod-archive-urls.txt')
	}
  
	// render the component to be included in the app
	render() {  
		// update the state with a random APOD image
		this.getRandomAPOD()
		// check the state
		console.log(this.state)
    const { error, isLoaded, items, url} = this.state;
		// check for errors
    if (error) {
      return <div>Error: {error}</div>
    } else if (!isLoaded) {
      return <div>/* LOADING MESSAGE */</div>
    } else {
      return (
        <div>
          <img src={url} />
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
