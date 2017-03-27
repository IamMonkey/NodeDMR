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
    constructor({type='Master',slave=[],taskPath:'./Task'} = {}){
        this.type=type;
        this.slave=slave;
    }
    //do with slave
    dispatch(){
        
    }
    
    
    
    
    
}

module.exports = MR;