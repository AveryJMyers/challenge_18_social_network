const {Schema, Types} = require('mongoose')

const userSchema = new Schema(
    {
        username:{
            type: String,
            unique: true,
            required: true,
            trim:true
        },
        email:{
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function (value){
                    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    return emailRegex.test(value);
                },
                message: 'invalid email'
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
)

const User = model('user', userSchema);

module.exports = User;