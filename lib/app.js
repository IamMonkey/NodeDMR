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
    
    run(taskname){
        try{
            let task=require(path.join(this.taskPath,taskname));
            let workList=task.dipatch();
            console.log(workList);
            task.reduce(workList);
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = MR;