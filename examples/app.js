const MR=require('..');
const config=require('./conf/mr');
const mr=new MR(config);
mr.run('wordcount');