-----------------------------------------**Memo**-------------------------------------------------------

--> it is a performnace hook.
--> it is for the component.

---> Memo hook is allows us to skip Re-Rendering of the component if its value not change 

-----> it's Declaration syntax is 

            const memoriseComponent = memo (some component)

--------> memoriseComponent -- it is a variable


--->  in above syntax store memorise version of component is not Re-Render when its parent component is re-render as long as it's value not change


---> (1) Parameters -->  we have to pass component as a parameter which we can memorise 

--- (2) Return value --> memo return a new react component it will not always Re-render 
            It will render only when it's value change