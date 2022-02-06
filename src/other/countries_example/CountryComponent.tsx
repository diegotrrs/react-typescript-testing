import { useEffect, useState } from "react";
import { useCountry } from "./useCountry"
import { randomCountry } from '../../data/countries'
import {  Link } from "react-router-dom";


const CountryComponent = () => {
    const { countryState, changeCountry } = useCountry()

    console.log('countryState', countryState);

    useEffect(()=>{
      // alert('hola');
      // console.log('HOLA');
      return () => {
        // console.log('ADIOS');
      }
    }, []);
    
    return (
        <div style={{ backgroundColor: "cyan", padding: "40px" }}>
          <button onClick={() => changeCountry(randomCountry())}>Randomise country</button>
          <br/>
          <br/>
          { countryState?.data &&
            <span>
              Country {countryState?.data}
            </span>
          }
          <br/>
          <br/>
          <br/>
          <br/>
          
        </div>
    
      );
}

export default CountryComponent;