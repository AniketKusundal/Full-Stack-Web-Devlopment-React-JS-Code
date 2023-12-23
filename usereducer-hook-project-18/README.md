<   <  <   <   <   <   <   <  <  <  **[2] UseReducer Hook**   >   > >   >   >   >   >   >   >   >
 
[#]--->  components with many state update spread across many event Handlers can get very hard to deal with for this cases you can group all the state of update logic outside your component , In a Single Function called a Reducer

[#]---> what if means that when you have complex logic to update state then you simply won't use setter function directly to update the state 

[#]--->  Insted you will write  a complex single function which will call setter with update data

[#]--->  UseReducer  ---- is a vary similar to useState but it lets you move the state update logic from event handeler to single function of your component called Reducer its Declaration syntax is...........



        -------------------------->      **Syntax Of UseReducer**       <---------------------------

        const [state , dispatch] = useReducer (reducer function , initial value)


[#]--- {1}  Prameters ---> (1) reducer function that specify how the state get updated it must be pure function and it must have two paramter
                        (1) state
                        (2) action
[#]---> state and action can be any type 




[#]--- {2} Initial Argument ---->   the initial value from which state is calculated it can be value of any type




[#]--->  {  Return Value  }  ---   it return array with exactly two values 

                                        (1) current state 
                                        (2) dispatch function -- that let you too update the value by the action type




