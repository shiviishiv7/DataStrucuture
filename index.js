const NodeList = require('./NodeList');
let nodelist = new NodeList();
var string= "1999";
for(let i =0;i<string.length;i++)
nodelist.insert(nodelist.getRootNode(),string[i]);

nodelist.display(nodelist.getRootNode())
let x  = nodelist.count(nodelist.getRootNode())
console.log(x)
let sum  = nodelist.calculate(nodelist.getRootNode(),x)
console.log(sum)
let sumString = new String(nodelist.addValue(sum,1))
for(let i=0;i<sumString.length;i++)
    nodelist.insertSecond(nodelist.getSecondRoot(),sumString[i])

nodelist.display(nodelist.getSecondRoot())