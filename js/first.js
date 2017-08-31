var a = [];
var b = [];
var e = [];
var fs = require('fs')
var readline=require('readline')
var lineReader = readline.createInterface({
    input: require('fs').createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv', 'UTF-8')
});
var writableFormat = require('fs').createWriteStream('Oilseeddata.json')
lineReader.on('line', function(line) {
    var jsonFromLine = {}
    var lineSplit = line.split(',')
    jsonFromLine.Particulars = lineSplit[0];
    jsonFromLine.Unit = lineSplit[24];
    a.push(jsonFromLine)
});
lineReader.on('close', function(line) {
    b = a.filter(function(data) {
        return data.Particulars.includes("Agricultural Production Oilseeds")
    });
    b.sort((c, d) => (d.Unit - c.Unit));
    console.log(b)
});
lineReader.on('close', function(line) {
    writableFormat.write(JSON.stringify(b, null, 2))
});
