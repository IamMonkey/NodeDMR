const fs= require('fs');
const path= require('path');

exports.dipatch=function(){//do in master
    const txt = fs.readFileSync(path.join(__dirname,'./wordcount.txt'),'utf-8');
    return txt.replace(/\n/g,' ').replace(/^\s\s*/, ' ').replace(/\s\s*$/, ' ').toLowerCase().split(' ')
}

exports.map=function(workList){//do in slave or master
    const map = new Map();
    workList.map(item=>{
        let itemcount=map.get(item);
        map.set(item,itemcount?++itemcount:1);
    })
    return [...map];
}

exports.reduce=function(result){//do in master
    const map = new Map();
    for (let [key, value] of result) {
        let itemcount=map.get(key);
        map.set(key,itemcount?itemcount+value:value);
    }
    console.log(map)
}
