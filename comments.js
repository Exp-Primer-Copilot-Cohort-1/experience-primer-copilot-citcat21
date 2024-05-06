// Create web server and listen on port 8080
// Load the express module
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Set the path of the static files
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the path of the views
app.set('views', './views');

// Render the page with the comment form
app.get('/comment', function (req, res) {
   res.render('comment');
});

// Handle the form submission
app.post('/comment', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.body.name,
      comment:req.body.comment
   };

   // Write the comment to the file
   fs.writeFile('comments.txt', JSON.stringify(response), function(err) {
      if (err) {
         return console.error(err);
      }
   });

   // Render the page with the thank you message
   res.render('thankyou', {data: response});
});

// Start the server
var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port);
});