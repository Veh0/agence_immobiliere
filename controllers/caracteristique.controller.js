const Caracteristique = require("../models").Caracteristique;

exports.list_caracteristiques = (req, res, next) => {
    Caracteristique.findAll({})
    .then(caracteristiques => res.status(200).json(caracteristiques))
    .catch(err => console.log(err))
}

exports.detail_caracteristique = (req, res, next) => {
    const id = req.params.id
    Caracteristique.findByPk(id)
    .then(caracteristique => res.status(200).json(caracteristique))
    .catch(err => console.log(err))
}

exports.add_caracteristique = (req, res, next) => {
    const newcaracteristique = req.body
    Caracteristique.create(newcaracteristique)
    .then(caracteristiques => res.status(201).send('caracteristique successfully added !'))
    .catch(err => console.log(err))
}

exports.edit_caracteristique = (req, res, next) => {
    const id = req.params.id
    const updatecaracteristique = req.body
    Caracteristique.update(updatecaracteristique, {
        where : {
            id : id
        }
    })
    .then(caracteristiques => res.status(201).send('caracteristique successfully updated !'))
    .catch(err => console.log(err))
}

exports.delete_caracteristique = (req, res, next) => {
    const id = req.params.id
    Caracteristique.destroy({
        where : {
            id : id
        }
    })
    .then(caracteristiques => res.status(200).send('caracteristique successfully removed !'))
    .catch(err => console.log(err))
}