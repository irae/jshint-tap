module.exports = {
    reporter: function reporter(results) {
        var len = results.length,
            str = '1..'+(len+1)+'\nok 1 Test was run\n',
            file, error, counter = 1;

        results.forEach(function (result) {
            counter+=1;
            file = result.file;
            error = result.error;
            str += 'not ok ' + counter + ' ' + file + ': line ' + error.line + ', col ' +
                error.character + ', ' + error.reason + '\n';
        });

        if (str) {
            process.stdout.write(str + "#TAP meta information\n" + len + ' errors\n');
        }
    }
};