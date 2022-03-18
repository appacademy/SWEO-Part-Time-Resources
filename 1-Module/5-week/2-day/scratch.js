function foo() {
	return 2 + bar();
  }

function bar() {
	return 6 + baz();
}

function baz() {
	return 3;
}

console.log(foo());
