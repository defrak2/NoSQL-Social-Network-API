const { Schema, model } = require('mongoose');
const friendSchema = require('./Friend');
const thoughtSchema = require('./Thought')

const userSchema = new Schema (
{

  friends: [friendSchema],
  thoughts: [thoughtSchema],  
  _id: {

  },
  username: {

  },
  email: {

  }
},
{
  toJSON: {
    getters: true,
  },
}
);

const User = model('user', userSchema)

module.exports = User;