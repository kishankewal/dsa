class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertAtBeginning(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtEnd(data) {
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    traverse(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }

    delete(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.insertAtEnd(1);
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(4);
linkedList.insertAtEnd(5);
linkedList.insertAtBeginning(0);
linkedList.insertAtEnd(6);
linkedList.delete(7);

linkedList.traverse();