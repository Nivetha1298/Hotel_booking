import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { listenerCancelled } from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions'
import React, { useContext, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'
import "./reserve.css"

const Reserve = ({setOpenModel , hotelId}) => {
    const [selectedRooms , setSelectedRooms] = useState([])
    const {dates}=useContext(SearchContext)
        const{data , loading ,error} = useFetch(`http://localhost:8005/api/hotels/room/${hotelId}`)
        console.log(dates,"dsrgfe");


        const getDatesInRange = (startDate ,endDate)=>{
            const start =new Date(startDate);
            const end =new Date(endDate) ;
            const date = new Date(start.getTime());

let list=[]

            while(date<=end){
                list.push(new Date(date).getTime())
                date.setDate(date.getDate()+1)
            }
            return list ;

        };
     const alldates =   getDatesInRange(dates[0]?.startDate ,dates[0]?.endDate);

     const isAvailable = (roomNumber)=>{
        // if its includes the room is filled
        const isFound = roomNumber.unavailableDates.some((date)=>
        alldates.includes(new Date(date).getTime()));
        // the room is not filled 
         return !isFound
     }
        const handleSelect =(e)=>{
            const checked = e.target.checked;
            const value = e.target.value;
            setSelectedRooms(
                checked ?[...selectedRooms,value]:selectedRooms.filter((item)=>item !== value)

                
            );
        };
        const handleClick=()=>{

        }
        console.log(selectedRooms)
        
  return (
    <div className='reserve'>
        <div className="rContainer">
        
            <FontAwesomeIcon  icon={faCircleXmark} className="rClose" onClick={ ()=>setOpenModel(false)}/>
            <span>Select your Rooms:</span>
            {data&&data.map(item=>(
                <div key={item._id}>
                <div className="rItem">
                    <div className="rItemInfo">
                       <div className="rTitle"><b>{item?.title}</b></div>
                        <div className="rDesc">{item?.desc} </div>
                        <div className="rMax">Max People:<b>{item?.maxPeople}</b></div>
                        <div className="rPrice"><b>{item?.price}</b></div>



                    </div>
                    <div className="rSelectRooms">
                    {item.roomNumbers.map((roomNumber)=>(
                    <div key={roomNumber._id}>
                        <div className="room">
                            <label>{roomNumber.number}</label>
                            <input type="checkbox" value={roomNumber._id} onChange={handleSelect}   disabled={!isAvailable(roomNumber)}/>
                        </div>
                        </div>
                    ))}</div>
                </div>
                </div>
            ))} 
          <button  onClick={handleClick} className="rButton">Reserve Now!</button>
        </div>
       </div>
  )
}

export default Reserve