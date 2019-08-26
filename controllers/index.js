const Task = require('../models/task');
const User = require('../models/user');

module.exports = {
  index,
};

function index(req, res, next) {

  function sortUsers() {
    sortedUsers = User.find({}).sort('-points')
    return sortedUsers;
  }
  function sortTasks(){
    sortedTasks = Task.find({}).sort('-completionTime')
    return sortedTasks;
  }


  sortUsers()
  .then(function (sortedUsers) {

    sortTasks()
    .then(function(sortedTasks){


      Task.find({}, function (err, tasks) {

        res.render('index', {
          title: 'Become a part of the solution.',
          user: req.user,
          name: req.query.name,
          tasks,
          sortedUsers,
          sortedTasks,
        })
      })
    })
  });
};