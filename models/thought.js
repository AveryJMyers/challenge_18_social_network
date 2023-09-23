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
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
      reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Reaction',
        },
      ],
    },
    {
      timestamps: true,
    }
  );
  
  
  const Thought = model('Thought', thoughtSchema);

  module.exports = Thought;