function setup(express, app){
  const router = express.Router();

  router.get('/healthcheck', function(req, res, next) {
    res.json({healthStatus: "OK"});
  });

  app.use('/api', router);
}

module.exports = {
  setup: setup
};