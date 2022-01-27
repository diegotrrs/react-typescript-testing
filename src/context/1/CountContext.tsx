import * as React from 'react'
import { createContext, useContext } from "react";

type ICounterState = {
  counter?: Number;
};

type ICounterContext = [ICounterState, React.Dispatch<React.SetStateAction<ICounterState>>];

const CountContext = createContext<ICounterContext>([{}, () => null]);

function useCount() {
  const context = useContext(CountContext)
  // console.log('useCount::render');
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`)
  }
  const [ count, setCount ] = context

  const increment = () => setCount((state: any) => ({
    ...state,
    counter: state.counter + 1,
  }));

  return {
    count,
    setCount,
    increment,
  }
}

const CountProvider = (props: any) => {
  const [count, setCount] = React.useState<ICounterState>({counter: 0})
  const value = React.useMemo(() => [count, setCount], [count])
  return <CountContext.Provider value={value} {...props} />
}

export {CountProvider, useCount}
