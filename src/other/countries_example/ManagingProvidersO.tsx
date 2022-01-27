
import React, { useState, useEffect } from "react";


type TManagedStateValue<T> = {
  data: T
}

type TUseManagedStateReturns<T> = [
  TManagedStateValue<T>,
  React.Dispatch<React.SetStateAction<TManagedStateValue<T>>>
]

type TCreateManagedStateReturns<T> = [
  (defaultValue: T) => TUseManagedStateReturns<T>
]

export const createManagedState = <T extends {}> (): TCreateManagedStateReturns<T> => {
    
  const useManagedState = (defaultValue: T) : TUseManagedStateReturns<T>  => {

    const [state, setState] =  useState<TManagedStateValue<T>>({data: defaultValue});
     
      useEffect(() => {
        
      }, []);
  
  
      const setStateIntercepted = async (newState: React.SetStateAction<TManagedStateValue<T>>) => {
        setState(newState);
      }
      
      return [state, setStateIntercepted];
    };
  
    return [      
      useManagedState
    ];
  };