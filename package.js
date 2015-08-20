Package.describe({
  name: 'gwendall:swing',
  summary: 'A swipeable cards interface packaged for Meteor',
  git: "https://github.com/gwendall/meteor-swing.git",
  version: '0.1.0'
});

Package.onUse(function (api, where) {

	api.addFiles([
    'vendor/swing/dist/swing.min.js',
    'lib.js'
	], 'client');

  api.export('Swing');

});
