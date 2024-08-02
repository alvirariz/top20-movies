import React, { useEffect, useState } from "react";
import { Display } from "../Display/Display";
 function Movie() {
    const[movies,setmovies]= useState([])

   useEffect(()=> {const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
      const options = {
         method: 'GET',
         headers: {
           accept: 'application/json',
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjMzN2U4OGM2ZWI5ZWVmYTkzYTMxZGFmMjRmYjkxNiIsIm5iZiI6MTcyMTM4NTIwNC40MzIwMjksInN1YiI6IjY2OWEyYTc5NmQ1ZmUyMjg5N2IxOWY2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5q7OtBPHudOZWMN2gL4LbnjgkW3A0znEa8jBtI_8E8'
         }
       };
             
   fetch(url,options)
   .then(data=> data.json())
   .then(data=> data.results)
   //.then(data=>console.log(data))
   .then(data=> data.map(val =>({
      title: val.title, poster: val.poster_path, plot: val.overview, id: val.id})))
   .then (t => {setmovies(t)})
   .catch(error=> console.error('Fetch error',error))
   },[]);
   console.log(movies)
   return( <Display data ={movies}/>)

}
export {Movie}