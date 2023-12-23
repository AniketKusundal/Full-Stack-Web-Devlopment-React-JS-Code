<   <   <   <   <   <       Storing Array in useState    >  >   >   >   >   >


[#] ---> if we need multiple ibjects declared Array and Stored All object in the array 

[#] ---> we can store this array of object into UseState 


[#] ---> we can display the content of an array in the react by using MAP function

<!-- useState Hook: The useState hook is a function provided by React for managing state in functional components. It returns an array with two elements: the current state value (data) and a function (setData) to update the state.

Sample Data: An array named arr is defined with sample data containing objects with id and fname properties.

State Initialization: The useState hook is used to create a state variable data and a function setData. The initial state of data is set to the contents of the arr array.

HTML Table: The component renders an HTML table with headers for "ID" and "Name."

Mapping Data to Table Rows: The map function is used to iterate over the data array. For each object (r) in the array, a table row (<tr>) is created with table cells (<td>) displaying the id and fname properties.



Key Prop: Each <tr> element has a key prop set to the id of the corresponding data element. This helps React efficiently update the DOM when the state changes.


 -->