<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
  <h1 align="center">Gulp 4 example usage of Karma-coverage and Cheerio</h1>
</p>

> Note that if you are using Require.js or any other dependency resolution within tests infrastructure, you should not need this example.

## What is going on inside?

- Cheerio parses JasmineSpecRunner.html, so there is single place to put files needed for tests
- Gulp proceeds with karma-coverage execution and opens result page 
