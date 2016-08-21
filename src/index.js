import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './app.css'

/*
 An image search application where users can type in a search term and be shown a collection of images,
 and their title from the WikiMedia API. Results should be loaded dynamically.

 The headline (H1) on the page should be updated to reflect the query,
 as should the URL (e.g. �_myapp.com/search?=foobar_� or similar).

 Requirements:
 Use of React
 Use of Gulp (or similar)
 Clear, concise, testable code
 Security conscious practices

 APIs:
 search_result = https://en.wikipedia.org/w/api.php?action=query&titles=${SEARCH_TERM}&prop=images
 image_urls = https://en.wikipedia.org/w/api.php?action=query&titles=${IMAGE_TITLE}|${IMAGE_TITLE}|${IMAGE_TITLE}&prop=imageinfo&iilimit=20&iiprop=timestamp|url

 A wireframe has been attached detailing the page setup.
 You may use additional open source packages and frameworks where you see fit.

 You can ignore the upvotes/downvotes part.
 */

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
