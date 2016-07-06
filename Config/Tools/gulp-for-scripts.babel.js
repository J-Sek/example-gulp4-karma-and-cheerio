import gulp from 'gulp';
import karma from 'karma';
import plugins from 'gulp-load-plugins';
let $ = plugins();

import {extractScripts} from './utils-for-coverage.js';

gulp.task('serve-coverage', gulp.series(
    done => extractScripts('Scripts/Test/JasmineSpecRunner.html', done),
    done => {
    new karma.Server({
            configFile:  `${__dirname}/../../karma.conf.js`,
            action: 'run',
            singleRun: true,
            preprocessors: {
                'Scripts/App/**/*.js': ['coverage']
            },
            reporters: ['progress', 'coverage'],
            coverageReporter: {
                includeAllSources: true,
                type : 'html',
                dir : 'coverage/',
                subdir: '.'
            }
        }, done)
        .on('error', err => { throw err; })
        .start();
    }, 
    () =>
        gulp.src('./coverage/index.html')
            .pipe($.open())
    )
)

gulp.task('serve-tests', () =>
    gulp.src('./Scripts/Test/JasmineSpecRunner.html')
        .pipe($.open())
)