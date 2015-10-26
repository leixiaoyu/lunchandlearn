// app/models/topic.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our topic model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Topic', {
    name : {type : String, default: ''},
    description : {type : String, default: ''},
    notes : {type: String, default: ''}
    vote : {type : Number, default: 0},
    owner : {type : String, default: ''},
    scheduledDate : {type: Date, default: '1970-01-01T00:00:01:000Z'},
    isCurrent : {type: Boolean, default: false}
});
