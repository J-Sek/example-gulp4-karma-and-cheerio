// Karma configuration
// Generated on Tue Nov 24 2015 16:49:55 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],

    files: [
        // "Scripts/3rdParty/jQuery/jquery-1.11.3.min.js",
        {pattern: 'Scripts/3rdParty/**/*.js', included: false},
        {pattern: 'Scripts/App/**/*.js'     , included: false},
        {pattern: 'Scripts/Test/**/*Spec.js', included: false},
        "Scripts/Test/AppSpecs.js"
    ],

    // client: {
    //   args: ['--grep', 'Ext'],
    // },

    exclude: [
    ],

    preprocessors: {
        'Scripts/App/**/*.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
        includeAllSources: true,
        dir: 'coverage',
        reporters: [
            { type: 'lcov', subdir: 'report-lcov' }, //https://www.npmjs.com/package/gulp-lcov-to-html
            { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' }
        ]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}