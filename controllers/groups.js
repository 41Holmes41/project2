const Task = require('../models/task');
const User = require('../models/user');
const Group = require('../models/group');

module.exports = {
  new: newGroup,
  create
};

function newGroup(req, res) {
    res.render('groups/newgroup', {
        user: req.user,
        name: req.query.name
      });
}

function create(req, res) {
    console.log("yooooooooooooooooo",req.user);

    Group.create(req.body, function (err, group){
        group.creator = req.user._id;
        group.users.push(req.user._id);
        group.save();
        res.redirect('/');
    })
}
