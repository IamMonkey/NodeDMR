const MR=require('../..');
const config=require('./conf/mr');
const path=require('path')

const mr1=new MR({
    type:'Slave',
    port:20001,
    active:true,
    wight:1,
    syncCode:true,
    taskPath:path.resolve(path.join(__dirname,'./task')),
    slave:[]
});
mr1.run('wordcount');

const mr2=new MR({
    type:'Slave',
    port:20002,
    active:true,
    wight:1,
    syncCode:true,
    taskPath:path.resolve(path.join(__dirname,'./task')),
    slave:[]
});
mr2.run('wordcount');


const mr=new MR(config);
mr.run('wordcount');