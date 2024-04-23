var express = require('express');
var router = express.Router();

var users = [
{
  id: 1,
  name: 'jhon',
  email: '<EMAIL>'

},
{
  id: 2,
  name: 'jane',
  email: '<EMAIL>'
}
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

// POST new user
router.post('/', function(req, res, next) {
  // Extracting data from request body
  const newUser = req.body;

  // Generating a unique ID for the new user
  const id = users.length + 1;

  // Assigning the ID to the new user
  newUser.id = id;

  // Adding the new user to the users array
  users.push(newUser);

  // Sending back the updated list of users
  res.status(201).json(users);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});


module.exports = router;
