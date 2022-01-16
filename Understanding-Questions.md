# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick function is executed
* Dipsatch is executed with AddOne as argument
* AddOne is executed which is predefined in action file with a {Type: ADDONE }
*The reducer function is then run with and the case ADDONE is executed which returns state.value + 1
...

* TotalDisplay shows the total plus 1.
