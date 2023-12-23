**Diffrance Between useState And UseReducer**

(1) Code Size -- >  genrally with useState you have to write less code ,
                with UseReducer you have to write both code that is reducer function and dispatch action
        
    However Reducer can help code down code if many event handler modify same state in similar way


(2)  Readablity  ---->> useState is vary to read when code is simple when they get more complex the can blowat(complete)   your component code make it defficult to scan in thiss case Usereducer let you clearly saprate update logic from the component 


(3) Debugging --- > debugging is vary easy in useReducer beacuase code is present in saprate function

(4) Personal Prefrance  ----- >>  Some devloper like reducer and some devloper like useState 

