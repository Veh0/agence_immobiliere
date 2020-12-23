const Annonce = require("../models").Annonce;
const Bien = require("../models").Bien;
const Acheteur = require("../models").Acheteur;

exports.list_annonces = (req, res, next) => {
    Annonce.findAll({
        attributes: ['id', 'startDate', 'endDate'],
        include: [
            {
                model: Bien,
                attributes: ['description', 'price', 'surface'],
            },
            {
                model: Acheteur,
                attributes: ['name', 'date'],
            }
        ]

    })
    .then(annonces => res.status(200).json(annonces))
    .catch(err => console.log(err))
}

exports.detail_annonce = (req, res, next) => {
    const id = req.params.id
    Annonce.findByPk(id, {
        attributes: ['id', 'startDate', 'endDate'],
        include: [
            {
                model: Bien,
                attributes: ['description', 'price', 'surface'],
            },
            {
                model: Acheteur,
                attributes: ['name', 'date'],
            }
        ]

    })
    .then(annonce => res.status(200).json(annonce))
    .catch(err => console.log(err))
}

exports.add_annonce = (req, res, next) => {
    const newAnnonce = req.body
    Annonce.create(newAnnonce)
    .then(() => res.status(201).json(newAnnonce))
    .catch( err => console.log(err))
    
}

exports.update_acheteur_annonce = (req, res, next) => {
    const id = req.params.id;
    const acheteur = req.body.AcheteurId
    Annonce.findOne({
        where: {
            id: id
        }
    })
    .then(annonce => {
        if (annonce) {
            Annonce.update({status: 0, AcheteurId: acheteur}, {
                where: {
                    id: id
                }
            })
            .then(edit_annonce => res.status(201).json(edit_annonce))
            .catch(err => console.log(err))
        }
    })

    
}

exports.edit_annonce = (req, res, next) => {
    const id = req.params.id
    const updateAnnonce = req.body
    Annonce.update(updateAnnonce, {
        where : {
            id : id
        }
    })
    .then(annonces => res.status(201).send('Annonce successfully updated !'))
    .catch(err => console.log(err))
}

exports.delete_annonce = (req, res, next) => {
    const id = req.params.id
    Annonce.destroy({
        where : {
            id : id
        }
    })
    .then(annonces => res.status(200).send('Annonce successfully removed !'))
    .catch(err => console.log(err))
}