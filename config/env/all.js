'use strict';

module.exports = {
	app: {
		title: 'A Quality Life Community',
		description: 'yoga for cancer survivors and their caregivers',
		keywords: 'cancer, classes,  partners, survivors, events'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
                'public/lib/font-awesome/css/font-awesome.css',
                'public/lib/angular-carousel/dist/angular-carousel.css'

			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/rangy/rangy-core.js',
                'public/lib/textAngular/src/textAngular-sanitize.js',
                'public/lib/textAngular/src/textAngularSetup.js',
                'public/lib/textAngular/src/textAngular.js',
                'public/lib/angular-carousel/src/angular-carousel.js',
                'public/lib/angular-touch/angular-touch.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};