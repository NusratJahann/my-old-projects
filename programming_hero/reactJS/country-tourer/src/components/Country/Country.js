import React, { useState } from "react";

const Country = (props) => {
  const id = props.key;
  const {
    name,
    unMember,
    maps,
    coatOfArms,
    area,
    population,
    capital,
    continents,
    flags,
    independent
  } = props.country;
  const { common, official } = name;
  const { googleMaps } = maps;

  let flagPNG = flags.png;
  let coatOfArmsPNG = coatOfArms.png;

  function boolCheck (boolValue){
    if(boolValue == true){
        boolValue = 'Yes';
    }
    else{
        boolValue = 'No'
    }
    return boolValue;
  }

  const [map,setMap] = useState ()

  let handleGoMap = () => {
    
    setMap(<a target="_blank" href={googleMaps} > Maps </a>)
    return map;  
  }

  return (
    <div>
        <div className="border-gray-900 border-2 ">
          <div className=" m-5 p-4 ">
            <p className="font-bold text-2xl">{common}</p>
            <div className="flex justify-center">
              
              <img src={flagPNG} alt="" className=" h-28 w-42 m-5  "/>
            </div>
            
            
            <p>Country Official name: {official}</p>
            <p>UN member: {boolCheck(unMember)}</p>
            <p>Area: {area}</p>
            <p>Continents: {continents}</p>
            <p>Population: {population}</p>
            <p>Independent: {boolCheck(independent)}</p>
            
            <p>Capital: {capital}</p>
            
            {/* <img src={coatOfArmsPNG} alt="" /> */}

            <div className="">
              <button  className="block rounded-md bg-slate-800 text-slate-300 hover:bg-amber-200 hover:text-gray-900 p-2 justify-center min-w-full mt-6">Add to choice</button>
              <button className="mt-2 block rounded-md bg-slate-800 text-slate-300 hover:bg-amber-200 hover:text-gray-900 p-2 justify-center min-w-full" onClick={handleGoMap}>Go to map</button>
            </div>

            
            
            {/*  */}
            


          </div>
        </div>
    </div>
  );
};

export default Country;
