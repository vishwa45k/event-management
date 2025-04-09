import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function StageEvent() {
    const [event,setEvent]=useState([]);
    const navigate =useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/stage/eventType").then((response)=>{setEvent(response.data)}).catch((error)=>console.log("error",error));},[]);
   
    
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-5 font-worksans text-lg">
        {event.map((event, index) => (
          <div
            key={index}
            className="p-5 bg-blue-500 text-white rounded-lg cursor-pointer"
            onClick={() => navigate(`/department/${event.eventType}`)}
          >
            {event.eventType}{" "}
            {/* ✅ Ensure you're displaying a string */}
          </div>
        ))}
      </div>
    </>
  );
}

export default StageEvent