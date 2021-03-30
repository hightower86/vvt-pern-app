const Router = require('express');
const router = new Router();
const blocksController = require('../controllers/blocksController');

router.get('/', blocksController.getAll);
router.post('/', blocksController.createBlock);
router.put('/:id', blocksController.updateBlock);
router.delete('/:id', blocksController.deleteBlock);

module.exports = router;
