const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody:  {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type:String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
)

const Reaction = model("reaction", reactionSchema)

module.exports = Reaction;