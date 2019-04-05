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
						//console.log(arr)

						let randomAPOD = arr[Math.floor(Math.random()*arr.length)]
						//console.log(randomAPOD)

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

		// !!!
		// Why does this loop?
		const file = require('./apod-archive-urls.txt');
		readTextFile(file)
	}
  
	// render the component to be included in the app
	render() {  
		
		/*
		// update the state with a random APOD image
		//setTimeout(this.getRandomAPOD(), 3000)
		setTimeout(() => {
			this.getRandomAPOD()
		},
		10000);
		*/

		// check the state
		console.log(this.state)
		/*
    const { error, isLoaded, items, url} = this.state;
		// check for errors
    if (error) {
      return <div>Error: {error}</div>
    } else if (!isLoaded) {
      return <div>LOADING MESSAGE</div>
    } else {
			return (
        <div>
          <img src='https://apod.nasa.gov/apod/ap091127.html' alt='APOD image'/>
        </div>
      )
    }
	  */

	  // OHHHHHHHHHHHH
	  // The problem was that it's an IMAGE element, so it needs the link to the jpg, not the html page that has an image on it 
		return (
			<div>
				<img src='https://apod.nasa.gov/apod/image/0911/NGC1097L_gendler.jpg' alt='APOD image'/>
			</div>
		)
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
