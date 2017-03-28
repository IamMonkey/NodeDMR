//create by fan 
const path=require('path');

class MR{
    /*
        type must Master or Slave , A Master or Slave have zero or more Node
        slave={
            HOST:'127.0.0.1',
            port:20001,
            wight:1,
            active:true
        }
    */
    constructor({type='Master',slave=[],taskPath='./',active=false,syncCode=true,port=-1,wight=1} = {}){
        this.type=type.toLocaleLowerCase();
        this.slave=slave;
        this.taskPath=taskPath;
        this.active=active;
        this.wight=wight;
        this.port=port;
        this.syncCode=syncCode;
    }
    
    async run(taskname){
        try{
            if(this.type==='master'){
                if(this.slave&&this.slave.length==0){
                    let task=require(path.join(this.taskPath,taskname));
                    let workList = await task.dipatch();
                    let nodeResult = await task.map(workList);
                    task.reduce(nodeResult);
                }else{
                    let task=require(path.join(this.taskPath,taskname));
                    let workList = await task.dipatch();
                    const count=workList.length/this.slave.length;
                    let canow=[];
                    for(let i=0;i<this.slave.length;i++){                 
                        var io = require('socket.io-client');
                        var socket = io(`ws://${this.slave[i].HOST}:${this.slave[i].port}`);
                        canow.push(new Promise((resolve,reject)=>{
                            socket.emit('/map',workList.slice(i*count,i*count+count),async (result)=>{
                                resolve(result);
                            })
                        }));
                    }
                    let nodeResult=[];
                    for(var i=0;i<canow.length;i++){
                        let ret=await canow[i];
                        nodeResult=[...nodeResult,...ret];
                    }
                    task.reduce(nodeResult);
                }
            }else if(this.type==='slave'){
                var io = require('socket.io')(this.port);
                io.sockets.on('connection',  (socket)=> {
                    socket.on('/syncCode', async (msg, callback)=> {
                        console.log(msg)
                    })
                    socket.on('/map', async (workList, callback)=> {
                        let task=require(path.join(this.taskPath,taskname));
                        let nodeResult = await task.map(workList);
                        callback(nodeResult);
                    })
                })
            }else{
                console.error('You should choice a type in Master and Slave!');
            }
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = MR;