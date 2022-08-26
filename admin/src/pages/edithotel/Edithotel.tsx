import "./edithotel.css"

import Sidebar from "../../components/sidebar/Sidebar";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const NewHotel = () => {
  const [files, setFiles] = useState();
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const navigate=useNavigate();
  const location =useLocation();
  const path = location.pathname.split("/")[1];
  const currentId:any = location.state
  console.log("id",currentId.data)
  const { data, loading, error } = useFetch(`http://localhost:8005/api/${path}/${currentId.data}`);
  console.log(data)

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
       // @ts-expect-error
      (option) => option.value
    );
    setRooms(value);
  };
  console.log(info);
  console.log(rooms);
  console.log(files);


  const handleClick = async (e) => {
    e.preventDefault();
   console.log("hello");
  console.log(currentId.data);
   console.log("path" ,path);
   const data  = new FormData();
    data.append("file", files);
    data.append("upload_preset", "kfpqlr7l");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/kfpqlr7l/image/upload",
        data
      )

      const { url } = uploadRes.data;
console.log(url)
      const newUser = {
        ...info,
        img: url,
      };

      await axios.put(`http://localhost:8005/api/${path}/${currentId.data}`, newUser);
   navigate("/hotels");


    } catch (err) {
      console.log(err);
    }
   console.log(info);
   console.log(files);
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
      
        <div className="top">
          <h1>{data?._id}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : data?.photos&&data?.photos[0]
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                   // @ts-expect-error
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {data && hotelInputs.map((input) => (
                <div className="formInput"  key={input.id}>
                  
                  <input
                  // style={{border:"1px solid red"}}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    defaultValue={data[input.id]}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
              {/*   @ts-expect-error */}
                  <option value={false}>No</option>
                  {/*  @ts-expect-error */}
                  <option value={true}>Yes</option>
                </select>
              </div>
              {/* <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div> */}


{/* 
<div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div> */}
              <button onClick={handleClick}>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;