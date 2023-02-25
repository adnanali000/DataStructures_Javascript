//constructor function to create different linked list
function LinkedList(){
    this.head = null;
    this.tail = null
}

//to create Nodes
function Node(value,next,prev){
    this.value = value;
    this.next = next;
    this.prev = prev
}

//add new node to the head
LinkedList.prototype.addToHead = function (value){
    var newNode = new Node(value,this.head,null)   
    if(this.head){
        //make already exist node to head node
        this.head.prev = newNode
    }else{
        //make new Node to head and tail when there is only one node
        this.tail = newNode
    }
    //set head to newNode
    this.head = newNode
}

//add new node to the tail
LinkedList.prototype.addToTail = function (value){
    let newNode = new Node(value,null,this.tail)
    if(this.tail) {
        this.tail.next = newNode
    }else{
        this.head = newNode
    }
    this.tail = newNode
}

//remove head of linkedlist
LinkedList.prototype.removeHead = function (){
    if(!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next
    if(this.head){
        this.head.prev = null
    }else{
        this.tail = null
    }
    return val
}

//remove tail of linked list
LinkedList.prototype.removeTail = function (){
    if(!this.tail) return null;
    var val = this.tail.value
    this.tail = this.tail.prev
    if(this.tail){
        this.tail.next = null
    }else{
        this.head = null
    }
    return val
}

//search method
LinkedList.prototype.search = function (searchValue){
    var currentNode = this.head;
    while (currentNode){
        if(currentNode.value === searchValue) return currentNode.value
        currentNode = currentNode.next
    }
    return null
}


var ll = new LinkedList();

ll.addToHead(100)
ll.addToHead(200)
ll.addToHead(300)

// ll.addToTail(10)
// ll.addToTail(20)
// ll.addToTail(30)

// ll.removeHead()

// console.log("remove head",ll.removeHead())
// console.log("remove head",ll.removeTail())
console.log("Value found",ll.search(200))
