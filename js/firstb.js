var a=[]
var b=[]
var fs = require('fs')
var readline=require('readline')
var lineReader = readline.createInterface({
    input: require('fs').createReadStream('../csvfile/Production-Department_of_Agriculture_and_Cooperation_1.csv', 'UTF-8')
});
var mywriteStream=require('fs').createWriteStream('foodgrains.json')
lineReader.on('line',function(line){
	var jsonFromLine={}
	var lineSplit=line.split(',')
    jsonFromLine.Particulars=lineSplit[0]
    jsonFromLine.Unit=lineSplit[24]
    a.push(jsonFromLine)
})
lineReader.on('close',function(line){
	b=a.filter(function(data){
		if(data.Particulars.includes("Agricultural Production Foodgrains")){
			if(!data.Particulars.includes("Rice")&& !data.Particulars.includes("Wheat")
			&& !data.Particulars.includes("Area")&& !data.Particulars.includes("Volume")
			&& !data.Particulars.includes("Yield")&& !data.Particulars.includes("Coarse Cereals"))				
			{				
				return data.Particulars
			}
		}
	})
	b.sort((a,b)=>(b.Unit-a.Unit))
	console.log(b)
	mywriteStream.write(JSON.stringify(b,null,2))
})