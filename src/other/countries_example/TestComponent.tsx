import { useState } from "react";
import { useCountry } from "./useCountry"
import { randomCountry } from '../../data/countries'


const TestComponent = () => {
    const { countryState, changeCountry } = useCountry()

    console.log('countryState', countryState);
    
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

export default TestComponent;