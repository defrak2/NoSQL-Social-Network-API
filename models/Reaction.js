// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');


// const reactionSchema = new Schema (
// {

//   reactionId: {
//     type: Schema.Types.ObjectId,
//     defualt: () => new Types.ObjectId(),
//   },


//   reactionBody: {
//     type: String,
//     required: true,
//     maxlength: 280,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     defulat: Date.now,
//     get: (timestamp) => dateFormat(timestamp)
//   },
// },
// {
//   toJSON: {
//     getters: true,
//   },
// }
// );

// const Reaction = model('reaction', reactionSchema)

// module.exports = Reaction;