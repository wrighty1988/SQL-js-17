const express = require('express');
//? npm i express
const app = express();
// initialised express function to use it throughout file.
 
const routes = require('./routes');
// set up our routes so our app.get(s) are in another file, keeping our index.js nice and clean.
 
app.use('/', routes);
 
app.listen(process.env.PORT || 3005, () => {
console.log('Server is listening.')
})