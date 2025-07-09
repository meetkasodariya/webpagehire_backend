const express = require('express');
const {
  getAllDevelopers,
  createDeveloper,
  hireDeveloper,
  deleteDeveloper
} = require('../controllers/developers');

const router = express.Router();

router.get('/', getAllDevelopers);
router.post('/', createDeveloper);
router.put('/:id/hire', hireDeveloper);
router.delete('/:id', deleteDeveloper);
module.exports = router;
