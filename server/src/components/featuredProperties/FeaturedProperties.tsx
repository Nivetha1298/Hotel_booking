import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import "./featuredProperties.css"

const FeaturedProperties = () => {
  // Fetching backend
   const {data ,loading ,error}=useFetch("http://localhost:8005/api/hotels?featured=true&limit=3")
   return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          { data&& data.map((item:any) => (
            <div className="fpItem" key={item._id}>
             <Link to={`hotels/${item._id}`}> <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              /></Link>
              
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from &#8377;{item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProperties