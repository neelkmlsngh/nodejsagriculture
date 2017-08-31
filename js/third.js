var fs = require('fs')
var result = []
fs.readFile('../csvfile/Production-Department_of_Agriculture_and_Cooperation_1.csv', 'UTF-8', function(err, usedData) {
    const writefile = fs.createWriteStream('../jsonfile/GraphData.json')
    var arr = usedData
        .split('\n')
        .map((usedData) => {
            return usedData.split(',')
        })

    for (var i = 1; i < arr.length; i++) {
        if (arr[i][0] == "Agricultural Production Foodgrains Rice Area Andhra Pradesh" ||
            arr[i][0] == "Agricultural Production Foodgrains Rice Area Karnataka" ||
            arr[i][0] == "Agricultural Production Foodgrains Rice Area Kerala" ||
            arr[i][0] == "Agricultural Production Foodgrains Rice Area Tamil Nadu") {
            particulars = arr[i][0];
            var3 = arr[i][4];
            var4 = arr[i][5];
            var5 = arr[i][6];
            var6 = arr[i][7];
            var7 = arr[i][8];
            var8 = arr[i][9];
            var9 = arr[i][10];
            var10 = arr[i][11];
            var11 = arr[i][12];
            var12 = arr[i][13];
            var13 = arr[i][14];
            var14 = arr[i][15];
            var15 = arr[i][16];
            var16 = arr[i][17];
            var17 = arr[i][18];
            var18 = arr[i][19];
            var19 = arr[i][20];
            var20 = arr[i][21];
            var21 = arr[i][22];
            var22 = arr[i][23];
            var23 = arr[i][24];
            var24 = arr[i][25];
            var argument = new Object;
            argument.Particulars = particulars
            argument.year1993 = var3
            argument.year1994 = var4
            argument.year1995 = var5
            argument.year1996 = var6
            argument.year1997 = var7
            argument.year1998 = var8
            argument.year1999 = var9
            argument.year2000 = var10
            argument.year2001 = var11
            argument.year2002 = var12
            argument.year2003 = var13
            argument.year2004 = var14
            argument.year2005 = var15
            argument.year2006 = var16
            argument.year2007 = var17
            argument.year2008 = var18
            argument.year2009 = var19
            argument.year2010 = var20
            argument.year2011 = var21
            argument.year2012 = var22
            argument.year2013 = var23
            argument.year2014 = var24
            if (argument.year1993 == "NA") {
                argument.year1993 = 0
            }
            if (argument.year1994 == "NA") {
                argument.year1994 = 0
            }
            if (argument.year1995 == "NA") {
                argument.year1995 = 0
            }
            if (argument.year1996 == "NA") {
                argument.year1996 = 0
            }
            if (argument.year1997 == "NA") {
                argument.year1997 = 0
            }
            if (argument.year1998 == "NA") {
                argument.year1998 = 0
            }
            if (argument.year1999 == "NA") {
                argument.year1999 = 0
            }
            if (argument.year2000 == "NA") {
                argument.year2000 = 0
            }
            if (argument.year2001 == "NA") {
                argument.year2001 = 0
            }
            if (argument.year2002 == "NA") {
                argument.year2002 = 0
            }
            if (argument.year2003 == "NA") {
                argument.year2003 = 0
            }
            if (argument.year2014 == "NA\r") {
                argument.year2014 = 0
            }
            result.push(argument)
            var x = result.sort(function(a, b) {
                return b.value - a.value
            })
        }
    }

    console.log(result);

    writefile.write(JSON.stringify(result, null, 2), 'UTF8');
})