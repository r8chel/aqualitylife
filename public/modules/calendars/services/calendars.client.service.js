'use strict';

//Calendars service used to communicate Calendars REST endpoints
angular.module('calendars').factory('Calendars', ['$resource',
	function($resource) {
		return $resource('calendars/:calendarId', { calendarId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);