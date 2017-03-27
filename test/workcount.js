const fs=require('fs');

const txt = fs.readFileSync('./workcount.txt','utf-8');
const wordList=txt.replace(/\n/g,' ').replace(/^\s\s*/, ' ').replace(/\s\s*$/, ' ').toLowerCase().split(' ')
delete txt;
const map = new Map();
wordList.map(item=>{
    let itemcount=map.get(item);
    itemcount=itemcount?++itemcount:1;
    map.set(item,itemcount);
})

for (let [key, value] of map) {
  console.log(key, value);
}