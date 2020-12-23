const Agent = require("../models").Agent;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.agent_list = (req, res, next) => {
    Agent.findAll({})
    .then(agents => res.status(200).json(agents))
    .catch(error => console.log(error))
}

exports.agent_register = (req, res, next) => {
    bcrypt.hash(req.body.pwd, 10, (err, hash) => {
        if (err) {
            throw err;
        }
        let agent = req.body;
        agent.pwd = hash
        Agent.create(agent)
        .then(data => res.status(201).json(data))
        .catch(error => console.log(error))
    })
    
}

exports.agent_login = (req, res, next) => {
    Agent.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(agent => {
        if (agent) {
            bcrypt.compare(req.body.pwd, agent.pwd, (error, result) => {
                if (error) {
                    res.status(500).json(error)
                } else {
                    if (result) {
                        const token = jwt.sign({ email: agent.email, name: agent.name, id: agent.id}, process.env.SECRET_PHRASE, {expiresIn: '24h'})
                        res.status(200).json({token: token})
                    } else {
                        res.status(500).json({message: 'You fail'})
                    }
                }

            })
        } else {
            res.status(404).json({message: 'invalid credentials'})
        }
    })
    .catch(error => res.status(500).json(error))
}