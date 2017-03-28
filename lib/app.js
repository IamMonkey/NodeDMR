//create by fan

const path=require('path')
class MR{
    /*
        type must Master or Slave , A Master or Slave have zero or more Node
        slave={
            HOST:ip,
            port:port,
            wight:1         //wight
        }
    */
    constructor({type='Master',slave=[],taskPath='./'} = {}){
        this.type=type;
        this.slave=slave;
        this.taskPath=taskPath;
    }
    
    async run(taskname){
        try{
            let task=require(path.join(this.taskPath,taskname));
            let workList=task.dipatch();
            let nodeResult =task.map(workList);
            
            //分布式
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