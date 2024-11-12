import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import img1 from "./images/50n@2x.png"
import axios from 'axios';


const Weather = () => {
  let [inputvalue, setinputvalue] = useState("")
  let [cityData, setcityData] = useState([])

  useEffect(()=>{

    featchData("Khaplu")
  },[])

  let ShowDAta=(e)=>{
    setinputvalue(e.target.value)


  }

  let featchData= async(city)=>{

    let cityNameLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f65e32faa80c40a876bd4112cd36e525`
    let res=await axios.get(cityNameLink)
    setcityData([res.data])
  }
  let DataFetch =()=>{
    featchData(inputvalue)
  }
  
  return (
    <div>

  
        {cityData.map((ele, indx)=>{
          return(

       
          <div key={indx} className='main w-full h-screen  bg-no-repeat  bg-cover flex items-center justify-center  bg-[url("https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg")]'>

            <div className="w-[550px] h-[350px] bg-[white] bg-opacity-50 backdrop-[5px] text-black ">

              <div className=" w-full h-[50px] mt-[40px] flex justify-evenly items-center">

                <input  value={inputvalue} onChange={ShowDAta} type="text" className="C-name w-[250px] h-[35px] px-[20px] border-none text-[16px] rounded-xl text-[gray] outline-none" placeholder="Enter City Name" />
                <button  onClick={DataFetch} className="search w-max p-[14px] bg-[white] text-black border-none text-[10px] cursor-pointer rounded-full hover:text-[black]"><CiSearch />
                </button>
              </div>
              <div className="data-show w-[80%] h-[200px] mx-auto p-1">
                <h3 className='text-[25px] ml-1 mt-[2vh] font-bold'>Weather in <span className="">{ele.name}</span></h3>
                <h5 className="text-[25px] ml-1 mt-[2vh] font-bold ">{(ele.main.temp - 273).toFixed(1)}'C</h5>
                <div className="icon w-[100px] h-[100px] float-right mt-[-70px]">
                <img src={`https://openweathermap.org/img/wn/${ele.weather[0].icon}@2x.png`} alt="" />
                  
                </div>
                <p className="description text-[16px] mt-[5vh] ml-[1vw]">{ele.weather[0].description}</p>
                <p className="wind">Wind Speed: <span className="speed">{ele.wind.speed} km/h</span></p>
                <div className='mt-4  max-auto'>
                <p className='text-[green] text-[ 18px] font-bold '> Design By: Tariq Baltistani</p>
                </div>
              </div>

            </div>

          </div>
             )
            })}




    </div>
  )
}

export default Weather