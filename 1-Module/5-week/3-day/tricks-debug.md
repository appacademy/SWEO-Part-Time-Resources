## Debugging Techniques
- read the <span style="color:#cd1d1d;">error message</span> if any 

- <span style="color:#cd1d1d;">comment things out</span> - allows us to **narrow the problem down** (smaller issues are easier to solve than bigger ones)

- utilize visual debugger tool (<span style="color:#cd1d1d;">console.log</span>; DON'T RELY ON ONLY MOCHA)

- <span style="color:#cd1d1d;">Common Code Analysis</span>
	- Check if conditions are being met correctly (is your 'if' statement being hit)
	- Check where the action is happening 
	    - i.e. array gives incorrect output; 
	    - the action - item pushed correctly?


### How to Leverage Debugger
- First track anything we want to watch (put code in variable for easiest time to debug)

- take input / example to run

- at each step:
	- what is the expected behavior of that line(s) of code (depending on the input)? 
	- What is it actually doing instead?

- run the debugger until output
