const express = require('express');
const router = express.Router();

const auth = require("../middlewares/auth")

const annonceController = require('../controllers/annonce.controller');

router.get('/', auth(), annonceController.list_annonces);
router.get('/:id', auth(), annonceController.detail_annonce);
router.post('/', auth(), annonceController.add_annonce);
router.patch('/:id', annonceController.update_acheteur_annonce);
router.put('/:id', auth(), annonceController.edit_annonce);
router.delete('/:id', auth(), annonceController.delete_annonce); 

module.exports = router;