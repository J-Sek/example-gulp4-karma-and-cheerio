import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';

var ignoreJasmine = /(\/jasmine|\/boot|CustomJasmineInit)/;
var macro = '//__ALL_FILES__';
var utf8 = { encoding: 'utf8' }

let extractScripts = (filePath, done) => {
    fs.readFile(filePath, utf8, (err, text) => {
        if (err) throw err;
        let $ = cheerio.load(text);
        let allFiles = $('script')
            .toArray()
            .map(tag => tag.attribs.src)
            .filter(source => !ignoreJasmine.test(source))
            .map(normalizePath)
            .join(',\n');

        console.log(allFiles);
            
        let templateText = fs.readFileSync('Scripts/Test/AppSpecs.template.js', utf8);
        fs.writeFileSync('Scripts/Test/AppSpecs.js', templateText.replace(macro, allFiles), utf8);
        done();
    });
};

let normalizePath = filePath => `"/${path.join('base', 'Scripts', 'Test', filePath)}"`.replace(/\\/g,'/');

module.exports = {
    extractScripts: extractScripts
};