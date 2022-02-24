const express = require('express');
const controller = require('../controllers/results');
const router = express.Router();

router.get('/', controller.list);

router.get('/:n1/:n2', controller.sum);

router.post('/:n1/:n2', controller.mult);

router.put('/:n1/:n2', controller.div);

router.patch('/:n1/:n2', controller.pot);

router.delete('/:n1/:n2', controller.res);

module.exports = router;
