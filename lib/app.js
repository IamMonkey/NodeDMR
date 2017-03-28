//create by fan

const path=require('path');
var io = require('socket.io')(8099);

class MR{
    /*
        type must Master or Slave , A Master or Slave have zero or more Node
        slave={
            HOST:ip,
            port:port,
            wight:1         //wight
        }
    */
    constructor({type='Master',slave=[],taskPath='./',active=false,syncCode:true,port=-1,wight=1} = {}){
        this.type=type.toLocaleLowerCase();
        this.slave=slave;
        this.taskPath=taskPath;
        this.active=active;
        this.wight=wight;
        this.port=port;
        if(this.type=='master'){
            
        }else if(this.type=='slave'){
            
        }else{
            console.error('You should choice a type in Master and Slave!');
        }
    }
    
    async run(taskname){
        try{
            let task=require(path.join(this.taskPath,taskname));
            let workList=task.dipatch();
            let nodeResult =task.map(workList);
            
//          分布式
//            let test=[];
//            test.push(new Promise((resolve,reject)=>{
//                        resolve([123])
//                      }));
//            test.push(new Promise((resolve,reject)=>{
//                        resolve([321])
//                      }));
//            test.push(new Promise((resolve,reject)=>{
//                        resolve([213])
//                      }));
//            test.push(new Promise((resolve,reject)=>{
//                        resolve([231])
//                      }));
//            //
//            let nodeResult=[];
//            for(var i=0;i<test.length;i++){
//                let ret=await test[i];
//                nodeResult=[...nodeResult,...ret];
//            }
            //
            task.reduce(nodeResult);
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = MR;