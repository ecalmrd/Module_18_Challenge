const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },
        
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId, 
                ref: "Thought",
            },
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },

    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
        return `${this.friends.length}`;
    })
  
// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
