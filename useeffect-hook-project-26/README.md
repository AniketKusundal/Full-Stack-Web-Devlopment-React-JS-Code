***UseEffect*** -->  useEffect Is a react Hook that let you to synchonice component with the external sysytemm

**stntax**
            useEffect (setup , Dependancies)   // here the dependancies is the optoional 




 ***[1] Parameters***  ---> *the function with the useEffect logic when you componeny is added to your DOM React Will Run your Setup Function*
*( setup Function Is executed only after component executed )*


***[2] Dependancies***     - >>>*the list of the values refered by the component if one of this value changes the useEffecct Code Again Exxecuted*

*it is a optional if we do not provide dependancies then UseEffect Code executed on Every Re-Render*


***[3] Return***   useEffect Reyruns The undefined


***[4] Use***    - >>>>    some components need to interract with the network or browser API or the third part labraires 
while they are displayed on the web-page 

this system are not controled by react so they are called external

***[#] What Is Effect***     ===>>>>>    genrally react components consists of two types of logic.

 *(1) Rendering Code*  -->>>> this code takes the properties or the data transfrom them and return JSX that you want to see on the screen
 Renndering code must be pure





*(1) Event Handdler*   =>>>>>  it is a nasted function inside ypur component which is called when some event is occurs  like Button Click 




***Effect Code***   -- >>>    some time component nned to connect with external sysyteem or the interract with the media player or browser whenever component visible on the screen 

connecting to the server is not a pure Calculation And Can't Happend durng rendering this is called the side effect code


<!--  UseEffect in react allows use to ewxcute the Side effect code -->