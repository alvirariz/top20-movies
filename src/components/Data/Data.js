import React, { useState,useEffect } from "react";
import "./Data.css";
import { useLocation, useNavigate } from "react-router-dom";
export function Data(){
    const location = useLocation();
    console.log('Received data:', location.state);
    const  info1  = location.state || {}; // data recieved from Display
    const movie_id = info1?.id // passed correctly
    const [info2,setinfo2] = useState([]) 
    const [trailer,settrailer]= useState([])
    const navigate=useNavigate()
    const back=()=>{
      navigate(-1);
     }


    useEffect(()=> {const url = 'https://api.themoviedb.org/3/movie/'+ movie_id + 'language=en-US'
        const url1 = 'https://api.themoviedb.org/3/movie/'+ movie_id + '/videos?language=en-US'
        const options = {method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: process.env.REACT_APP_TMDB_BEARER
            }
          };
           
               
    fetch(url,options)
  .then(response => response.json())
  .then ((data) => ({tagline: data.tagline,
     genre:data.genres.map(d=>d.name), 
     runtime:data.runtime,
     voteavg:data.vote_average,
     status:data.status,
     released:data.release_date
    }))
  .then(data=> setinfo2(data)) // workss
  .then(data=>console.log(data))
  .catch(err => console.error(err));
  
  


  fetch(url1,options)
  .then(response => response.json())
  .then(data=> data.results)
  
  .then(data=> settrailer(data)) // workss
  .catch(err => console.error(err));
   },[movie_id]); ///worksss
   
   const arr = trailer.filter(data => { return data.type === 'Trailer'})
   const link = arr.length > 0 
   ? `https://www.youtube.com/embed/${arr[0].key}`
   : '';

 useEffect(() => {
   if (link) {
     console.log('Trailer link:', link);
   }
 }, [link]);
console.log(info2)
    
    return(
        <div className= "main">
           <div className="back">
              <button onClick={back} className="bttn">&lt;</button>
            </div>

  
            <div className="sec">
                <div className="hddr">
                    <h1 style={{fontSize:'300%'}}>{info1?.title}</h1>
                    <h3 style={{fontStyle:"italic", color:"rgb(145, 197, 194)"}}>{info2.tagline}</h3>

                </div>
                <div className="trailer">
                <iframe src={link} title="trailer"></iframe>
                </div>
            </div>
            
            <div className="side"> 
           
            
           <div className=" oth">
             <h3>{`Runtime: ${info2.runtime} min `}</h3>
             <h3>{`Vote Average: ${info2.voteavg}`}</h3>
             <h3>{`Released Date: ${info2.released} `}</h3>
             <h3>{`Status: ${info2.status} `}</h3>
             </div>

               
             <div className="syno">
                 <p>{info1?.plot}</p>
                </div>

                <div className="genre">
               <h3>GENRE:</h3>
                <div className="list">
                {info2.genre && info2.genre.map((data)=>{return <ul>{data}</ul>})}
                </div>
             </div>

       
           </div>
        
        </div>
    )
}