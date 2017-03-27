let begin=new Date().getTime()
const fs=require('fs');

const txt = fs.readFileSync('./workcount.txt','utf-8');
const wordList=txt.replace(/\n/g,' ').replace(/^\s\s*/, ' ').replace(/\s\s*$/, ' ').toLowerCase().split(' ')
delete txt;


const wordList1=wordList.slice(0,wordList.length/2)
const wordList2=wordList.slice(wordList.length/2,wordList.length);
//you cat dispatch is
const map1 = new Map();
wordList1.map(item=>{
    let itemcount=map1.get(item);
    map1.set(item,itemcount?++itemcount:1);
})
const map2 = new Map();
wordList2.map(item=>{
    let itemcount=map2.get(item);
    map2.set(item,itemcount?++itemcount:1);
});
//you cat dispatch it
const map3=map1;

for (let [key, value] of map2) {
  let itemcount=map3.get(key);
  map3.set(key,itemcount?itemcount+value:value);
}

for (let [key, value] of map3) {
  console.log(key, value);
}


let end=new Date().getTime()

console.log(end-begin)