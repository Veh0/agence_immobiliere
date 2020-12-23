const express = require('express');
const router = express.Router();

const caracteristiqueController = require('../controllers/caracteristique.controller');

router.get('/', caracteristiqueController.list_caracteristiques);
router.get('/:id', caracteristiqueController.detail_caracteristique);
router.post('/', caracteristiqueController.add_caracteristique);
router.put('/:id', caracteristiqueController.edit_caracteristique);
router.delete('/:id', caracteristiqueController.delete_caracteristique); 

module.exports = router;