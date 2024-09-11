const { User, Thought } = require('../models')

module.exports = {

  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().populate('reactions');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {
      const thoughts = await Thought.findOne({ _id: req.params.thoughtId })
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

      if (!req.body.userId || !req.body.thoughtText) {
        return res.status(400).json({ message: 'userId and thoughtText are required' });
      }
  
      const thoughtData = {
        thoughtText: req.body.thoughtText,
        username: req.body.username,
      };
      const thought = await Thought.create(thoughtData);


      const user = await User.findById(req.body.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.thoughts.push(thought._id);
      user.friendCount = user.thoughts.length; 
      await user.save();

  
      res.status(201).json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No course with that ID' });

      }

      await User.deleteMany({ _id: { $in: thought.users } });
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
  async createReaction(req, res) {
    try {
      const { thoughtId } = req.params;
      const { reactionBody, username } = req.body;


      const thought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $push: { reactions: { reactionBody, username } } },
        { new: true, runValidators: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that ID' });
      }

      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {

      const {thoughtId, reactionId} = req.params

      const thought = await Thought.findOneAndUpdate(
        {_id: thoughtId},
        { $pull: { reactions: {reactionId}}},
        {new: true}
      );
      
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that ID'})
      }
      

res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};