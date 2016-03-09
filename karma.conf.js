module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/vendor/angular.min.js',
      'app/vendor/angular-mocks.js',
        'app/vendor/ui-bootstrap-tpls-1.2.4.min.js',
        'app/scripts/app.js',
      'app/scripts/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
