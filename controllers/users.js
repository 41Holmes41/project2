const User = require('../models/user');
const Task = require('../models/task');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    show,
    assignTask,
    removeTask,
    completeTask
};

function show(req, res) {
    User.findById(req.params.id, function (err, user) {
        res.render('myinfo', {
            user
        });
    });
};

function assignTask(req, res) {

    Task.findById(req.params.id, function (err, task) {
        task.available = false;
        task.save();
        User.findById(req.user._id, function (err, user) {
            user.currentTasks.push(task._id);

            user.save(function (err) {
                res.redirect(`/`);
            })
        })
    })
}

function removeTask(req, res) {

    Task.findById(req.params.id, function (err, task) {
        task.available = true;
        if (req.user.currentTasks) {
            req.user.currentTasks.remove(task.id);
            req.user.save();
        };
        task.save(function (err) {
            res.redirect(`/tasks/mytasks`);
        });
    })
}

function completeTask(req, res) {

    Task.findById(req.params.id, function(err, task){
        task.completed = true;
        if (req.user.currentTasks) {
            req.user.currentTasks.remove(task.id);
            req.user.completedTasks.push(task.id);
            req.user.points+=task.points;
            req.user.save();
        };
        task.save(function (err) {
            

            res.redirect(`/tasks/mytasks`);
        });
    })
};