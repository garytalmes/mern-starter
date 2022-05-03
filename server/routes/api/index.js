const router = require('express').Router();
const sampleRoutes = require('./sample-routes');

router.use('/matchup', sampleRoutes);

module.exports = router;
