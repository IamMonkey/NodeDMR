//create by fan

class MR{
    /*
        type must Master or Slave , A Master or Slave have zero or more Node
        slave={
            HOST:ip,
            port:port,
            wight:1         //do wight
        }
    */
    constructor({type='Master',slave=[]} = {}){
        this.type=type;
        this.slave=slave;
    }
    
    
    
}

module.exports = MR;