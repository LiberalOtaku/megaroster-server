var db = require('../config/db');

var nameSchema = db.Schema({
  name: String,
  promoted: Boolean,
  updated_at: { type: Date, default: Date.now }
});

var Name = db.model('Note', nameSchema);

module.exports = Name;
