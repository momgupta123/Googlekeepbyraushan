import React, { useEffect, useState }  from "react";

const Covid19 = () => {

    const[country,setCountry]=useState("");
    const [resp,setResp]=useState([]);

    useEffect(()=>{
        fetch("https://disease.sh/v3/covid-19/countries")
        .then((response)=>response.json())
        .then((data)=>setResp(data))
        
        .catch((err)=>{
          console.log("err.message");
        });
        },[]);
    

 
        function output(){
            fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
            .then((response)=>response.json())
            .then((data)=>setResp(data))
          }
  return (
    <div>

<h1>covid-19 case country </h1>
 <input type="text"  onChange={(e)=>
setCountry(e.target.value)}  placeholder="enter the country name"/>
<br />

<button onClick={output()} > Search</button>
 
  <div className="countryData">
<p> country name :{resp.country}</p>
<p>case: {resp.cases}</p>
<p> Death : {resp.deaths}</p>

  </div>

    </div>
  )
}

export default Covid19;