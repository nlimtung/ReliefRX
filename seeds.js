require ('dotenv').config();

require('./config/database');
const Shifts = require('./models/shift');
const User = require('./models/user')


Shifts.deleteMany({})
.then(function(results) {
  console.log(results);
  process.exit();
});

User.deleteMany({})
.then(function(results) {
  console.log(results);
  process.exit();
});