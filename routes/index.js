const indexRouter = require('express').Router();

indexRouter.use('/', require('./htmlRoutes') );
indexRouter.use('/api', require('./apiRoutes'));

module.exports = indexRouter;