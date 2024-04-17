const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/notes
router.get('/', ensureLoggedIn, notesCtrl.index);
// POST /api/notes
router.post('/', ensureLoggedIn, notesCtrl.create);

module.exports = router;
