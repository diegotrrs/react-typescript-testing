
import React, { useState, useEffect } from "react";


type TManagedStateValue<T> = {
  data: T
}

type TUseManagedStateReturns<T> = [
  TManagedStateValue<T>,
  React.Dispatch<React.SetStateAction<T>>
]



type TCreateManagedStateReturns<T> = [
  (defaultValue: T) => TUseManagedStateReturns<T>
]

export const createManagedState = <T extends {}> (): TCreateManagedStateReturns<T> => {
    
  const useManagedState = (defaultValue: T) : TUseManagedStateReturns<T>  => {

    const [state, setState] =  useState<TManagedStateValue<T>>({
      data: defaultValue
    });
     
      useEffect(() => {
        
      }, []);
  
  
      const setStateIntercepted = async (value: React.SetStateAction<T>) => {
        console.log("typeof value === 'function'", typeof value === 'function');
        
        const resolvedValue: T = typeof value === 'function'
        ? (value as (prevValue: T) => T)(state.data)
        : value;
        console.log("resolvedValue");
        console.log(resolvedValue);
        const a : TManagedStateValue<T> = {
          data: resolvedValue
        }
        setState(a);
      }
      
      return [state, setStateIntercepted];
    };
  
    return [      
      useManagedState
    ];
  };