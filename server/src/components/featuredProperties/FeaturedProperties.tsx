import React from 'react'
import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className="fpItem">
        <img src="https://www.themillwoodsfo.com/gallery-images/properties/5/9/4/Outdoor_Building_Picture_22.jpg" className='fpImg'/>
        <span className='fpName'>Taj Lake Palace</span>
        <span className='fpCity'>Udaipur</span>
        <span className='fpPrice'> Starting from  &#8377;2000</span>
        <div className="fpRating">
          <button>
            8.9
          </button>
          <span>
            Excellent
          </span>
        </div>
        </div>


        <div className="fpItem">
        <img src="https://coolmaterial.com/wp-content/uploads/2021/09/Austin-Header-1000x600.jpg" className='fpImg'/>
        <span className='fpName'>Moon hotel Tungnath</span>
        <span className='fpCity'>Jaipur</span>
        <span className='fpPrice'> Starting from  &#8377;2000</span>
        <div className="fpRating">
          <button>
            8.9
          </button>
          <span>
            Excellent
          </span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://www.kawadahotel.com/gallery-images/properties/5/4/6/Kawada_Hotel_Building.jpg" className='fpImg'/>
        <span className='fpName'>Shivansh Cafe and resto</span>
        <span className='fpCity'>Mumbai</span>
        <span className='fpPrice'> Starting from  &#8377;2000</span>
        <div className="fpRating">
          <button>
            8.9
          </button>
          <span>
            Excellent
          </span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://www.hoteldenimgso.com/gallery-images/properties/1/3/3/Standard_King_Room2.jpg" className='fpImg'/>
        <span className='fpName'>The Galaxy Camp</span>
        <span className='fpCity'>Kerala</span>
        <span className='fpPrice'> Starting from  &#8377;2000</span>
        <div className="fpRating">
          <button>
            8.9
          </button>
          <span>
            Excellent
          </span>
        </div>
        </div>
       
       
    
    
    </div>
  )
}

export default FeaturedProperties