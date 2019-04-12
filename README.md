# Current Roadmap

<br>

### APOD Archive Scraper ✔️
Scrapes the NASA APOD Archive and returns a text file with the direct URLs of NASA APOS images
- https://github.com/burrrata/apod-archive-scraper

<br>

### Web App V1 
React App that displays images from a list of URLs
- https://github.com/burrrata/react-image-viewer

<br>

### Image Morph/Interpolation Alg 
Takes in 2 *arbitrary* images and smoothly morphs/interpolates between them

<br>

### Web App V2 
Displays the APOD image of the day, then continiously morphs between randomly chosen image from the APOD archive.

<br>

### Decentralized Images Framework
- Automated script to upload APOD images to a decentralized database.
- API to easily interact with and view those APOD images

<br>

### Web App V3
Arbitrary framework that allows users to upload arbitrary images to a decentralized database, then point a web app to that list to create a visualization that morphs between those images fluidly, then make that visualization viewable via a publically accessible link.

<br>
<br>
<br>

# Other Ideas

<br>

### APOD Archive Organization
Organizing APOD images so that the most similar images are next to each other. This might make it easier for the morphing between them. It might also make the transitions less dramatic. Time will tell.
- https://github.com/ml4a/ml4a-guides/blob/master/notebooks/image-path.ipynb

<br>

### Progressive Growing of APOD 
What if we applied NVIDIA's [Progressive Growing of GANs](https://github.com/tkarras/progressive_growing_of_gans) to the APOD archive instead of the celebrity faces dataset?
- maybe start with something like [DCGAN](https://github.com/Newmu/dcgan_code) that's less computationally intensive

<br>

### GANGogh Generated Images
Training on the APOD dataset rather than art
- https://github.com/rkjones4/GANGogh

<br>

### Art on APOD
Neural synthesis and artistic image interpolation into APOD images.
- http://genekogan.com/works/neural-synth/
- https://github.com/genekogan/neural-synth
- https://janhuenermann.com/blog/abstract-art-with-ml
- https://github.com/janhuenermann/blog
