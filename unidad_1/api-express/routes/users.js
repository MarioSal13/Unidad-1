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
  const newUser = req.body;
  const id = users.length + 1;
  newUser.id = id;
  users.push(newUser);
  res.status(201).json(users);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

// PUT update user
router.put('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  Object.assign(user, updateUser);
  res.json(user);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

// DELETE user
router.delete('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  const deletedUser = users.splice(index, 1);
  res.json(deletedUser[0]);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
