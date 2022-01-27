import { CountProvider, useCount } from "./CountContext";
import { CountryContext, CountryProvider } from "./country";

import { useEffect, useState, useContext } from "react";

const CountParent : React.FC<any> = ({ children }) => {
  useEffect(()=>{
    // console.log('CountParent render');
  })
  return (
    <div style={{ backgroundColor: "MediumSeaGreen", padding: "20px", margin: "10px", height: "100%" }}>
      <div>I'm just a parent</div>
      {children}
    </div>
  );
}

const CountDisplay : React.FC = () => {
  const { count } = useCount();
  return (
    <div style={{ backgroundColor: "tomato", padding: "20px",marginTop: "10px" }}>
      <div>The current counter count is {count.counter}</div>
    </div>
  );
}

const Counter : React.FC = () => {
  const { count, increment } = useCount();
  return (
    <div style={{ backgroundColor: "lightblue", padding: "30px" }}>
      Increment  <button onClick={increment}>{count.counter}</button>
    </div>
  );
}

const NothingToDoWithCounterButYesToCountry : React.FC = () => {


  // In order to avoid duplication I could move the code to a hoook
  const { countryStore } : any= useContext(CountryContext)

  const [country, setCountry] = countryStore;
  const [name, setName] = countryStore;

  

  useEffect(()=>{
    console.log(`(1) use effect NothingToDoWithCounterButYesToCountry: ${country}`);
  });

  const changeCountry = () => {
    let r = (Math.random() + 1).toString(36).substring(7);
    setCountry(`GB ${r}`);

  }

  const changeName = () => {
    let r = (Math.random() + 1).toString(36).substring(7);
    setName(`Name ${r}`);
  }


  return (
    <div style={{ backgroundColor: "yellow", padding: "40px" }}>
      I have nothing to do with counters but I care about country
      <div style={{ backgroundColor: "lightblue", padding: "30px" }}>
        Change country  <button onClick={changeCountry}>{country}</button>
        Change name  <button onClick={changeName}>{name}</button>
      </div>
    </div>
  );
}

const NothingToDoWithCountryNorCounter : React.FC = () => {

  // const { countryStore } : any= useContext(CountryContext)

  // const [country, setCountry] = countryStore;

  // const { countryStore } : any= useContext(CountryContext)




  useEffect(()=>{
    console.log(`(2) use effect NothingToDoWithCountry`);
  });


  return (
    <div style={{ backgroundColor: "yellow", padding: "40px" }}>
      I have nothing to do with counters nor country
      
    </div>
  );
}

function CounterPage() {
  return (
    <div>
      <CountParent>
        <CountProvider>
          <CountDisplay />
          <Counter />
          <CountryProvider>
            <NothingToDoWithCounterButYesToCountry />
            <NothingToDoWithCountryNorCounter />
          </CountryProvider>
        </CountProvider>
      </CountParent>
    </div>
  );
}

export default CounterPage;
