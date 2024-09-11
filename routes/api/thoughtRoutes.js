const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).get(getSingleThought).post(createThought);

router
.route('/:thoughtId')

.put(updateThought)
.delete(deleteThought);

module.exports = router;