const Router = require('express');
const router = new Router();

const blocksRouter = require('./blocksRouter');

router.use('/blocks', blocksRouter);

module.exports = router;
