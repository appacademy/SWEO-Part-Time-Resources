class Stack {
  constructor(){
    this.data = [];
    this.length = 0;
  }

  push(val){
    this.data[this.length] = val;
    this.length++;
    return this.length;
  }

  pop(){
    const popped = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return popped;
  }

  peek(){
    return this.data[this.length - 1];
  }

  printAll(){
    if(!this.data.length) return 0;

    for(let i = this.length - 1; i >= 0; i--){
      console.log(this.data[i]);
    }

    return 1;
  }
}


const history = new Stack();
// console.log(history);
// history.push('wikipedia');
// console.log(history);
// history.push('google');
// history.push('aao');
// console.log(history);
// let removed = history.pop();
// let removed2 = history.pop();
// console.log(removed);
// console.log(removed2);
// console.log(history);
// console.log(history.peek());
console.log(history);
console.log(history.printAll())
