/*
append
indexOf
removeAt
get

*/
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(element) {
        let node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    insert(position, element) {
        if (position < 0 || position > this.length) {
            return false;
        }
        let node = new Node(element);
        let current = this.head;
        let previous = null;
        let index = 0;
        if (position === 0) {
            node.next = current;
            this.head = node;
        } else {
            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }
            node.next = current;
            previous.next = node;
        }
        this.length++;
        return true;
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) {
            return null;
        }
        let current = this.head;
        let previous = null;
        let index = 0;
        if (position === 0) {
            this.head = current.next;
        } else {
            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }
            previous.next = current.next;
        }
        this.length--;
        return current.element;
    }

    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.element === element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    toString() {
        let current = this.head;
        let string = "";
        while (current) {
            string += current.element + " ";
            current = current.next;
        }
        return string;
    }
}
