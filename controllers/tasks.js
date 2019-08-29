const User = require('../models/user');
const Task = require('../models/task');

module.exports = {
    new: newTask,
    create,
    show,
    mytasks,
    update,
    edit
};

function newTask(req, res) {

    res.render('tasks/newtask', {
        user: req.user,
        name: req.query.name
    }); //this is a relative path to the location of the template
}

function create(req, res) {
   // req.body.creatorId = req.user._id;
   //req.body.creatorName = req.user.name;

    //we need to make sure we have express.json() and express.urlencoded() installed in our middleware stack to get the information from req.body!!
    Task.create(req.body, function (err, task) {

        task.creatorName = req.user.name;
        task.creatorId = req.user._id;
        task.creatorAvatar = req.user.avatar;
        task.save();
        res.redirect('/'); // this is an http request to the flights url
    })
}

function show(req, res) {
    Task.findById(req.params.id, function (err, task) {
        res.render('tasks/show', {
            task,
            user: req.user,
            name: req.query.name
        });
    });
};

function mytasks(req, res) {

    let assignedTasks = [];
    var tasksToList = [];
    req.user.populate('currentTasks').execPopulate(function (err, user) {
        req.user.populate('completedTasks').execPopulate(function (err, user) {
        res.render('tasks/mytasks', {
            user: req.user,
            name: req.query.name
        })
    })
    })
}

function update(req, res) {
    
    Task.findOneAndUpdate(req.params.id, req.body, function (err, task){
        
        res.redirect('/');
    })

}

function edit (req,res) {
    Task.findById(req.params.id, function (err, task) {
        res.render('tasks/edit', {
            task,
            user: req.user,
            name: req.query.name
        })
    })
}
















/* assignedTasksInfo = [];
User.findById(req.user._id, function (err, user) {

    user.currentTasks.forEach(function (assignedTask) {
        console.log("assignedTask:", assignedTask);
        Task.findById(assignedTask._id, function (err, task) {
            console.log("task:", task);
            assignedTasksInfo.push(task);
            
        })


    })
    }).then(function() {
        console.log("assignedTasksInfo:", assignedTasksInfo);

        res.render('tasks/mytasks', {
            assignedTasksInfo,
            user: req.user,
            name: req.query.name
        })
}) */