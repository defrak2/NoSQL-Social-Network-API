const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).get(getSingleThought).post(createThought);

router
.route('/:thoughtId').put(updateThought).delete(deleteThought);

router
.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction)

module.exports = router;