require("dotenv").config();
const express = require("express");
const app = express();
const port = '3000';

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const agentRouter = require('./routes/agent');
app.use('/agent', agentRouter)

const annonceRouter = require('./routes/annonce');
app.use('/annonce', annonceRouter)

const bienRouter = require('./routes/bien');
app.use('/bien', bienRouter)

const acheteurRouter = require('./routes/acheteur');
app.use('/acheteur', acheteurRouter)

const tagRouter = require('./routes/tag');
app.use('/tag', tagRouter)

const caracteristiqueRouter = require('./routes/caracteristique');
app.use('/caracteristique', caracteristiqueRouter)

app.listen(port, ()=>{
    console.log('Server running');
})

module.exports = app;