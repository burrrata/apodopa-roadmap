// Under Construction
// DO NOT USE YET
const request = require('request')
const cheerio = require('cheerio')

const URL = 'https://apod.nasa.gov/apod/archivepix.html'
let APODArchiveURLs = []

request(URL, function (error, response, html) {
	
  if (!error && response.statusCode === 200) {
    
		const $ = cheerio.load(html)
    let urls = []
    
		$('a').each(function(i, elem) {
      const link = $(this).attr('href')
      urls.push(`https://apod.nasa.gov/apod/${link}`)
		});
		
		// the first two and last 10 URLs are not APOD images
		urls = urls.splice(2, (urls.length - 10))
		urls.map((x) => APODArchiveURLs.push(x))
		console.log(`FINISHED`)
		console.log(APODArchiveURLs)
  }
});

// export const APODArchiveURLs
