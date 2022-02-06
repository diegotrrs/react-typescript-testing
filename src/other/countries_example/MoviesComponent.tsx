import { useEffect, useState } from "react";
import { useCountry } from "./useCountry"
import { randomCountry } from '../../data/countries'
import {  Link } from "react-router-dom";


const MoviesComponent = () => {

   

    useEffect(()=>{
      //alert('hola');
      return () => {
        //alert('adios');
      }
    }, []);
    
    return (
        <div style={{ backgroundColor: "magenta", padding: "40px" }}>
          <br/>
          <br/>
          Movies
          <br/>
          <br/>
          <br/>
          <br/>
          
        </div>
    
      );
}

export default MoviesComponent;