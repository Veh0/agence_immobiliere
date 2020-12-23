const express = require('express');
const router = express.Router();

const tagController = require('../controllers/tag.controller');

router.get('/', tagController.list_tags);
router.get('/:id', tagController.detail_tag);
router.post('/', tagController.add_tag);
router.put('/:id', tagController.edit_tag);
router.delete('/:id', tagController.delete_tag); 

module.exports = router;