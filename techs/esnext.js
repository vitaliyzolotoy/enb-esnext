var vow = require('vow');
var vowFs = require('vow-fs');
var Concat = require('concat-with-sourcemaps');
var esnext = require('esnext');
var fs = require('fs')

module.exports = require('enb/lib/build-flow').create()
    .name('esnext')
    .target('target', '?.js')
    .defineRequiredOption('source')
    .useSourceFilename('source', '?')
    .builder(function(preTargetSourceFileName) {
        var concat = new Concat(true, 'all.js', '\n');
        var target = this.node.resolvePath(this._target);

        return vow.all([
            vowFs.read(preTargetSourceFileName, 'utf8')
        ]).then(function(res) {
            res.map(function (argument) {
                var code = (esnext.compile(argument).code) || '';

                concat.add(preTargetSourceFileName, code);
            })
            return concat.content;
        });
    })
    .createTech();
