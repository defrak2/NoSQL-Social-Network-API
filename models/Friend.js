const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema (
{

  thoughts: {

  },
  friends: {

  },
  _id: {

  },

  username: {

  },
  email: {

  },

},
{
  toJSON: {
    getters: true,
  },
}
);

const Thought = model('thought', thoughtSchema)

module.exports = Thought;