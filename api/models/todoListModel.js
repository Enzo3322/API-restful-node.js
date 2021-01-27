'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Insira sua tarefa'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pendente', 'executando', 'completa']
    }],
    default: ['pendente']
  }
});


module.exports = mongoose.model('Tasks', TaskSchema);