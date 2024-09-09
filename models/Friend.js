const { Schema, model } = require('mongoose');


const friendSchema = new Schema (
{
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address.']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],


},
{
  toJSON: {
    getters: true,
  },

},

);

friendSchema.virtual('friendCount').get(function() {
  return this.friends.length;
})

friendSchema.set('toJSON', {
  virtuals: true,
})
const Friend = model('friend', friendSchema)

module.exports = Friend;