'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Calendar = mongoose.model('Calendar'),
	_ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Calendar already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Create a Calendar
 */
exports.create = function(req, res) {
	var calendar = new Calendar(req.body);
	calendar.user = req.user;

	calendar.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(calendar);
		}
	});
};

/**
 * Show the current Calendar
 */
exports.read = function(req, res) {
	res.jsonp(req.calendar);
};

/**
 * Update a Calendar
 */
exports.update = function(req, res) {
	var calendar = req.calendar ;

	calendar = _.extend(calendar , req.body);

	calendar.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(calendar);
		}
	});
};

/**
 * Delete an Calendar
 */
exports.delete = function(req, res) {
	var calendar = req.calendar ;

	calendar.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(calendar);
		}
	});
};

/**
 * List of Calendars
 */
exports.list = function(req, res) { Calendar.find().sort('-created').populate('user', 'displayName').exec(function(err, calendars) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(calendars);
		}
	});
};

/**
 * Calendar middleware
 */
exports.calendarByID = function(req, res, next, id) { Calendar.findById(id).populate('user', 'displayName').exec(function(err, calendar) {
		if (err) return next(err);
		if (! calendar) return next(new Error('Failed to load Calendar ' + id));
		req.calendar = calendar ;
		next();
	});
};

/**
 * Calendar authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.calendar.user.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};