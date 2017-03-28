let begin=new Date().getTime()
const fs=require('fs');

const txt = fs.readFileSync('./wordcount.txt','utf-8');
const wordList=txt.replace(/\n/g,' ').replace(/^\s\s*/, ' ').replace(/\s\s*$/, ' ').toLowerCase().split(' ')
delete txt;
const map = new Map();
wordList.map(item=>{
    let itemcount=map.get(item);
    map.set(item,itemcount?++itemcount:1);
})

for (let [key, value] of map) {
  console.log(key, value);
}

let end=new Date().getTime()

console.log(end-begin)