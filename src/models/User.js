const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  // outros campos conforme necessário
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
