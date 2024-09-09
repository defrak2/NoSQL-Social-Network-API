const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addThought,
  removeThought,
} = require('../../controllers/userController.js');


router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/thoughts').post(addThought);

router.route('/:userId/thought/:thoughtId').delete(removeThought);

module.exports = router;