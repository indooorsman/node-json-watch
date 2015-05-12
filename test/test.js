var fs = require('fs');
var jw = require('../index.js');
var path = require('path');

var file = path.join(__dirname, 'test.json');

jw.watch(file);

console.log('current json:', jw.get());

fs.writeFileSync(file, '{"a": ' + (jw.get().a + 1) + '}', {encoding: 'utf8'});

setTimeout(function () {
    console.log('after file changed:', jw.get());
}, 6000);
