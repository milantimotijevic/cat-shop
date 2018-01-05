function setup(app){



  app.get('/', function(req, res, next) {
    res.render('home');
  });

  app.get('/combat', function(req, res, next) {
    res.render('combat');
  });

  app.get('/noncombat', function(req, res, next) {
    res.render('noncombat');
  });
}

module.exports = {
  setup: setup
};