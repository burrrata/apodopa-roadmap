// Imports
//////////////////////////////////////////////////////////
import React, { Component } from 'react'
import './App.css'



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

  componentDidMount() {
			
		const request = require('request')
		const cheerio = require('cheerio')
		//Being blocked by CORS
		//What if instead of pulling the data live, there was a serparate repo w a list of the urls
		//then this app would just ping that list
		//const URL = 'https://apod.nasa.gov/apod/archivepix.html'
		const URL = 'https://crossorigin.me/https://apod.nasa.gov/apod/archivepix.html'

		request(URL, function (error, response, html) {

			if (error) {
			  console.log(error)
			}
			
			if (response.statusCode != 200) {
			  console.log(response.statusCode)
			}

			if (!error && response.statusCode === 200) {
				
				const $ = cheerio.load(html)
				const parsedResults = []
				
				$('a').each(function(i, elem) {
					const link = $(this).attr('href')
					parsedResults.push(link)
				});
				
				let output = parsedResults.slice(2)
				console.log(output)

				// pic a random image from the first 100 listed in the archive
				let image = output[Math.floor(Math.random()*output.length)]

				this.setState({
					isLoaded: true,
					items: output,
					url: image,
				})
			}
		});
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
