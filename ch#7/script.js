let stack;

function createStack() {
  console.log(`----------\ncreating an empty stack`);
  stack = [];
}

function pushIntoStack(inStack) {
  console.log(`----------\npushing ${inStack} into the stack`);
  stack.push(inStack);
}

function popOutOfStack() {
  console.log(`----------\npoping ${stack[stack.length-1]} out of the stack`);
  stack.pop();
}

console.log(stack);
createStack();
console.log(stack);
pushIntoStack("ashkan()");
console.log(stack);
pushIntoStack("karademy()");
console.log(stack);
pushIntoStack("pegah()");
console.log(stack);
pushIntoStack("hamed()");
console.log(stack);
popOutOfStack();
console.log(stack);
pushIntoStack("alireze()");
console.log(stack);
popOutOfStack();
console.log(stack);
popOutOfStack();
console.log(stack);
