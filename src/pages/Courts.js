/* import { useEffect, useState } from "react";
import { getAllCourts } from "../api";




function Courts() {

  const [courts, setCourts] = useState([]);

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

export default Courts */









import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { getAllCourts } from "../api";
import { NavLink } from 'react-router-dom';

export default function Courts() {

  const [courts, setCourts] = useState([]);

  useEffect(() => {
    async function handleCourts() {
      const response = await getAllCourts();
      setCourts(response.data)
    }
    handleCourts()

  }, [])

  return (
    
    <Card sx={{ maxWidth: 1200, display:"flex", flexDirection:"column"}}>
      {courts.map((court) => {
        return (
          <>
          <CardMedia sx={{ height: 450 }}
        image={court.picture_url}
        title="court-img"
        
        
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {court.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {court.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <NavLink to="/bookings">Reservar</NavLink>
        </Button>
      </CardActions>
          </>
        )
      })}
      
    </Card>
  );
}
