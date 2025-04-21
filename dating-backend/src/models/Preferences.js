const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PreferencesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    preferences: {
        type: Map,
        of: String,
        required: true
    }
}
);

module.exports = mongoose.model('Preferences', PreferencesSchema);
