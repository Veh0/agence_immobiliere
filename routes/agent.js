const express = require('express');
const router = express.Router();

const auth = require("../middlewares/auth")

const agentController = require('../controllers/agent.controller');

router.get('/', auth(), agentController.agent_list);
router.post('/register', agentController.agent_register);
router.post('/login', agentController.agent_login);

module.exports = router;