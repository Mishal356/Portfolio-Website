const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: String,
  role: String,
  bio: String,
  image: String,
});

module.exports = mongoose.model('Team', TeamSchema);
