const { Schema, model } = require('mongoose')
const reactionScehma = require('./reaction')

const thoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    username: {
      type: String,
      required: true,
      ref: 'User',
    },
      reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Reaction',
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
      timestamps: true,
    }
  );
  
  
  const Thought = model('Thought', thoughtSchema);

  module.exports = Thought;