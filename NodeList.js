class Node {
    constructor(data){
        this.data = data
        this.next = null;
    }
}
class NodeList {
    constructor(){
        this.root = null;
        this.secondRoot = null;
    }
    getRootNode(){
        return this.root;
    }
    getSecondRoot(){
        return this.secondRoot;
    }
    setRootNodeToNull(){
        this.root= null;
    }
    insert(root,value){
        let node = new Node(value);
        if(!root)this.root=node;
        else{
            while(root.next)root=root.next
            root.next=node;
        }
    }
    display(root){
        if(root){
            console.log(root.data);
            this.display(root.next)
        }
    }
    count(root){
        if(root){
          return  this.count(root.next) +1
        }else{
            return 0
        }
    }
    calculate(root,count){
        if(root)
          return    this.calculate(root.next,--count) +(Math.pow(10,count) * root.data)
        else return 0;
    }
    addValue(originalValue,increamentValue){
        return originalValue+increamentValue;
    }
    insertSecond(root,value){
        
        if(!root){
            let node = new Node(value);
            this.secondRoot = node;
        }  
        else if(root.next)this.insertSecond(root.next,value)
        else {
            let node = new Node(value);
            root.next = node;
        }
    }
    
}

module.exports = NodeList;