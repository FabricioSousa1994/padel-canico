import { useEffect, useState } from "react";
import { getAllCourts } from "../api";




function Courts() {

  const [courts, setCourts] = useState();

  useEffect(() => {
    async function handleCourts() {
      const response = await getAllCourts();
      setCourts(response.data)
    }
    handleCourts()

  }, [])
  



  return (
    <div>
    <h1>Courts</h1>
    <div>
      {courts.map((court) => {
        return (
          <>
          <li>
            <p>{court.name}</p>
            <img src={court.picture_url} alt="court-img"/>
            <p>{court.description}</p>
          </li>
          </>
        )
      })}
    </div>

      
    </div>
  )
}

export default Courts