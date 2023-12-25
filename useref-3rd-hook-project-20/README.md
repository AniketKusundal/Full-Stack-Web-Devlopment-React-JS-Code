<   <  <   <   <   <   <   <  **Useref Hook**  >   >   >   >   >   >   >   >


# Useref ->> when you want component to Re-Render some information but but you don't want that information to trigger new render then we have to use UseRef Hook

    it's Declaration Syntax Is

    const ref - useRef(initial value)

(1) Parameters ---> (initial value) The value You wnat to ref object current property to be initially assign it can be value of any type

(2)  Return Value  ---> UseRef Return object with single property current , we can change the value of current Property any time Means Current property is Mutable


<!-- 

**Diffrance Between useref And UseState**

--------------------------------------------|-------------------------------------------------------
                useRef                      |                useState
--------------------------------------------|-------------------------------------------------------
1 ) useref retrun the single value that is  | 1) useState return Array With two value 
    ref of given value                      |
                                            
2) useref does not trigger Re-Render when   | 2) useState Trigger Re-Render When You Change it's Value
    you change its value                    |
    
3) useRef contain mutable value means we    | 3) UseSate containn unmutable value menns we can not directly
    can modify the value present in Useref  |     modify the value we have to call functionwith the new to modify -->