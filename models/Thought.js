const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction'); 

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280, 
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleDateString(), 
    },
    reactions: [Reaction.schema], 
    reactionCount: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      getters: true,
    },

  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;