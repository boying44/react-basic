const path = require('path');
const express = require('express');
const router = express.Router();

// Server Side Rendering - I have to figure out how to renderToString Typescript. Typescript needs to be compiled to JS first.
// https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4
router.get('/', (req, res) => {
  res.render('index', {
    title: 'RRE',
    content: reactDom
    // pass variables to the template here
  });
});

module.exports = router;
