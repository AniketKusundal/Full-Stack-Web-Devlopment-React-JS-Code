<!-- 

    [#]---  for all our privious aplication output remains same  after initial rendering suppose we want to create a counter whose value incremented after Clicking Button Or Automatically after Re-Render page Everytime 

    [#]--- for this purpose open main.jsx file and modify as follws

    [#]---  and also modify the app.jsx

    [#]--- in main.jsx file we declared i variable whosse initial values is 0

    [#]--- then we created refresh function in which we are rendering app component

    [#]--- we are passing one parameter to app component that is counter

    [#]--- last line in main.jsx SetInterval()

    [#]--- SetInterval function takes two parameter is 
    
    [1] arrow function which is executed after fixed time period 
    [2] time in milisecond after which we want to execute arrow function 

   [#]--- in this example app component  re-Render after every 2 Second as we mentioned in the   SetInterval() function  EXAMPLE -> setInterval(() => Refresh(), 2000);




 -->