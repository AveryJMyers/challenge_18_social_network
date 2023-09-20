const { Schema, Types } = require('mongoose');

const reactionSchema = newSchema({
    reactionId: {
        type: ObjectId,
        default: () => new mongoose.Types.ObjectId(),
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
}
)
const userSchema = new Schema