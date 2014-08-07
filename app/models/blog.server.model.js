'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Blog Schema
 */
var BlogSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Blog name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
    content: {
        type: String,
        default: '',
        required: 'Enter blog text, some html allowed'
    }
});

mongoose.model('Blog', BlogSchema);