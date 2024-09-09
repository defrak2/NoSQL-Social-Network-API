const { Thought } = require('../models')

module.exports = {

  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().populate('users');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {
      const course = await Course.findOne({ _id: req.params.courseId })
      .populate('users');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(course);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const course = await Course.create(req.body);
      res.json(course);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!course) {
        res.status(404).json({ message: 'No course with that ID' });

      }

      await Student.deleteMany({ _id: { $in: thought.users } });
      res.json({ message: 'Thought and users deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.courseId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }
      
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};