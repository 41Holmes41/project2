var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var groupSchema = new mongoose.Schema({
    name: String,
    password: String,
    description: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    recentlyCompleted: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Group', groupSchema);