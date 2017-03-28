const fs= require('fs');
const path= require('path');

exports.dipatch=function(){
    console.log(path.join(__dirname,'./wordcount.txt'))
    const txt = fs.readFileSync(path.join(__dirname,'./wordcount.txt'),'utf-8');
    return txt.replace(/\n/g,' ').replace(/^\s\s*/, ' ').replace(/\s\s*$/, ' ').toLowerCase().split(' ')
}

exports.map=function(workList){
    const map = new Map();
    workList.map(item=>{
        let itemcount=map.get(item);
        map.set(item,itemcount?++itemcount:1);
    })
    return map;
}

exports.reduce=function(result){
    for (let [key, value] of result) {
      console.log(key, value);
    }
}
