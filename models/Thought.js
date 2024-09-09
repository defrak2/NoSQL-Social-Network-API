const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema (
{

  _id: {

  },
  thoughtText: {

  },
  username: {

  },
  createdAt: {

  },
  reactions: {

  },
  _v: {

  },
  reactionCount: {

  }
},
{
  toJSON: {
    getters: true,
  },
}
);

const Thought = model('thought', thoughtSchema)

module.exports = Thought;