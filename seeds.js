require ('dotenv').config();

require('./config/database');
const Shifts = require('./models/shift');


Shifts.deleteMany({})
.then(function(results) {
  console.log(results);
  process.exit();
});