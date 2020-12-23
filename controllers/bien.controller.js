const BienTag = require("../models").BienTag
const BienCaracteristique = require("../models").BienCaracteristique
const Bien = require("../models").Bien;
const Tag = require("../models").Tag;
const Caracteristique = require("../models").Caracteristique;

exports.list_biens = (req, res, next) => {
    Bien.findAll({
        attributes: ['description', 'price', 'surface'],
        include: [
            {
                model: Tag,
                attributes: ['name'],
                through: {
                    model: BienTag,
                    attributes: []
                }
            },
            {
                model: Caracteristique,
                attributes: ['name'],
                through: {
                    model: BienCaracteristique,
                    attributes: []
                }
            }
        ]
    })
    .then(biens => res.status(200).json(biens))
    .catch(err => console.log(err))
}

exports.detail_bien = (req, res, next) => {
    const id = req.params.id
    Bien.findByPk(id, {
        attributes: ['description', 'price', 'surface'],
        include: [
            {
                model: Tag,
                attributes: ['name'],
                through: {
                    model: BienTag,
                    attributes: []
                }
            },
            {
                model: Caracteristique,
                attributes: ['name'],
                through: {
                    model: BienCaracteristique,
                    attributes: []
                }
            }
        ]
    })
    .then(bien => res.status(200).json(bien))
    .catch(err => console.log(err))
}

exports.add_bien = (req, res, next) => {
    const newBien = req.body
    Bien.create(newBien)
    .then(bien => {
        if(req.body.Tags.length > 0 && req.body.Caracteristiques.length > 0){
            bien.setCaracteristiques(req.body.Caracteristiques)
            bien.setTags(req.body.Tags)
            .then(() => res.status(201).json(bien))
            .catch( err => console.log(err))
        }
    })
    
}

exports.edit_bien = (req, res, next) => {
    const id = req.params.id
    const updateBien = req.body
    Bien.update(updateBien, {
        where : {
            id : id
        }
    })
    .then(biens => res.status(201).send('Bien successfully updated !'))
    .catch(err => console.log(err))
}

exports.delete_bien = (req, res, next) => {
    const id = req.params.id
    Bien.destroy({
        where : {
            id : id
        }
    })
    .then(biens => res.status(200).send('Bien successfully removed !'))
    .catch(err => console.log(err))
}