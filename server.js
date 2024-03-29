// var mongoose = require('mongoose'),
//     express  = require('express'),
//     bp       = require('body-parser'),
//     path     = require('path'),
//     root     = __dirname,
//     port     = process.env.PORT || 8000,
//     app      = express();

// app.use(bodyParser.urlencoded());

// // app.use(express.static(path.join(__dirname, "./client/static")));
// app.use( express.static( path.join( root, 'bower_components' )));
// app.use( express.static( path.join( root, 'client' )));
// app.use(bp.json())
// require('./server/config/routes.js')(app);

// app.listen( port, function() {
//   console.log( `server running on port ${ port }` );
// });




var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
app.use( express.static( path.join( root, './client/static' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});



