const Acheteur = require("../models").Acheteur;
const Bien = require("../models").Bien;
const Annonce = require("../models").Annonce;

exports.list_acheteurs = (req, res, next) => {
    Acheteur.findAll({})
    .then(acheteurs => res.status(200).json(acheteurs))
    .catch(err => console.log(err))
}

exports.detail_acheteur = (req, res, next) => {
    const id = req.params.id
    Acheteur.findByPk(id)
    .then(acheteur => res.status(200).json(acheteur))
    .catch(err => console.log(err))
}

exports.add_acheteur = (req, res, next) => {
    const newAcheteur = req.body
    Acheteur.create(newAcheteur)
    .then(acheteurs => res.status(201).send('Acheteur successfully added !'))
    .catch(err => console.log(err))
}

exports.edit_acheteur = (req, res, next) => {
    const id = req.params.id
    const updateAcheteur = req.body
    Acheteur.update(updateAcheteur, {
        where : {
            id : id
        }
    })
    .then(acheteurs => res.status(201).send('Acheteur successfully updated !'))
    .catch(err => console.log(err))
}

exports.delete_acheteur = (req, res, next) => {
    const id = req.params.id
    Acheteur.destroy({
        where : {
            id : id
        }
    })
    .then(acheteurs => res.status(200).send('Acheteur successfully removed !'))
    .catch(err => console.log(err))
}