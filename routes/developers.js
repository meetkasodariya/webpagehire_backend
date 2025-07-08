const express = require('express');
const {
  getAllDevelopers,
  createDeveloper,
  hireDeveloper
} = require('../controllers/developers');

const router = express.Router();

router.get('/', getAllDevelopers);
router.post('/', createDeveloper);
router.put('/:id/hire', hireDeveloper);

module.exports = router;