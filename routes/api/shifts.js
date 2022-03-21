const express = require('express');
const router = express.Router();
const shiftCtrl = require('../../controllers/shifts');

router.post('/new', shiftCtrl.create);
router.get('/', shiftCtrl.shiftIndex)
router.get('/getone', shiftCtrl.shiftDetails)


module.exports = router;