const Tag = require("../models").Tag;

exports.list_tags = (req, res, next) => {
    Tag.findAll({})
    .then(tags => res.status(200).json(tags))
    .catch(err => console.log(err))
}

exports.detail_tag = (req, res, next) => {
    const id = req.params.id
    Tag.findByPk(id)
    .then(tag => res.status(200).json(tag))
    .catch(err => console.log(err))
}

exports.add_tag = (req, res, next) => {
    const newtag = req.body
    Tag.create(newtag)
    .then(tags => res.status(201).send('tag successfully added !'))
    .catch(err => console.log(err))
}

exports.edit_tag = (req, res, next) => {
    const id = req.params.id
    const updatetag = req.body
    Tag.update(updatetag, {
        where : {
            id : id
        }
    })
    .then(tags => res.status(201).send('tag successfully updated !'))
    .catch(err => console.log(err))
}

exports.delete_tag = (req, res, next) => {
    const id = req.params.id
    Tag.destroy({
        where : {
            id : id
        }
    })
    .then(tags => res.status(200).send('tag successfully removed !'))
    .catch(err => console.log(err))
}