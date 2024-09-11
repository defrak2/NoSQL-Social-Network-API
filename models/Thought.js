const mongoose = require('mongoose');
const { Schema, model } = mongoose;

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
    reactions: [
      new Schema(
        {
          reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
          },
          reactionBody: {
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
        },
        {
          toJSON: {
            getters: true,
          },
          id: false, 
        }
      )
    ],
  },
  {
    toJSON: {
      getters: true,
    },

  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;