const path=require('path');

module.exports={
    type:'Master',
    port:20000,
    active:true,
    wight:1,
    syncCode:true,
    taskPath:path.resolve(path.join(__dirname,'../task')),
    slave:[{
            HOST:'127.0.0.1',
            port:20001,
            wight:1,
            active:true
    },{
            HOST:'127.0.0.1',
            port:20002,
            wight:1,
            active:true
    }]
}