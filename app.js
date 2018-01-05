const express = require('express');
const exphbs = require('express-handlebars');

const port = 3000;

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const mainViewController = require('./controller/main-view-controller');
mainViewController.setup(app);

const statusAPI = require('./api/status-api');
statusAPI.setup(express, app);



app.listen(port, function() {
  console.log('Server started on port ' + port);
});