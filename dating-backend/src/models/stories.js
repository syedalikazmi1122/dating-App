const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        enum: ['image', 'video'],
        required: true
    },
    videoLength: {
        type: Number,
        max: 30,
        required: function() {
            return this.contentType === 'video';
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 
    }
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;