var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  value: { type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required: true },
});

const Token = mongoose.model('Token', TokenSchema);

module.exports = Token;
