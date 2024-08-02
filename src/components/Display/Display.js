import React from "react";
import './Display.css'
import { Link } from "react-router-dom";
export function Display(t) {
  const arr = t.data
  console.log(arr)
  
  let x = "https://image.tmdb.org/t/p/w780"
return( <div className="Main">
    <div className="Header">
        <h1>TOP 20 MOVIES </h1>

    </div>
 <div className="secondary">
        {
        arr.map((data) => {
            return (<div className= "b">
                <div className="con">
                <img src={x + data.poster} alt = "pstr" className="img"></img>
                <div>   
                <Link className="link" to={`/${data.title}`} state= {data} ><h3>{data.title}</h3> </Link>
            <p className="para">{data.plot}</p>
            </div>
            </div>
            <div className="block">
            </div>

            </div>)
        })
        }
      
       

    </div>

</div>)
    
}