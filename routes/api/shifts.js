const express = require('express');
const router = express.Router();
const shiftCtrl = require('../../controllers/shifts');

router.post('/new', shiftCtrl.create);
router.get('/', shiftCtrl.shiftIndex)
router.get('/:id', shiftCtrl.shiftDetails)
// router.get('/myposts', shiftCtrl.myPostIndex)


module.exports = router;