[#] -- >  UseMemo Hook ()   ===>  use memo is a react hook that let you too store the result of the calculation between component Re-render



#Syntax of UseMemo -->

        const StoredValue  = UseMemo (calculate Value , dependencies)


[1] Parameters -- >  calculate value the function for calculating the value the we want to store it should be pure that takes no argument and should return any value.

    ==> React will call your function during initial render on the next render react will return some value again if the dependencies have not change since the last render 




[2] Dependencies -- >> the list of the all values ref inside calculate value code react will compair each dependncies with it privious value if dependancies changes then and then only it will call calulate value function 




[3]  Return  --->>  On the initial Re-Render useMemo returns the result of calling calculate value during the next render it will eithert returns and already stored value from the last render if the dependancies not change or call calculate value again and return new calculated value if dependacies change 