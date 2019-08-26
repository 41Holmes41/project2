var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var taskSchema = new mongoose.Schema({
    title: String,
    available: {
        type: Boolean,
        default: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    description: String,
    completion: Date,
    points: {
        type: Number,
        default: 1
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    creatorName: String,
    assigned: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);