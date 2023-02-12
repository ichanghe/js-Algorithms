// 创建链表
function Node(val){
     this.val=val;
     this.next=null;
}
function createList(arr){
    let head=new Node(arr[0]);
    let tail=head;
    for(let i=1;i<=arr.length-1;i++){
        tail.next=new Node(arr[i]);
        tail=tail.next;
    }
    return head;
}
 
