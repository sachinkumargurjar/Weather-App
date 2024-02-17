"use client";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useRouter } from "next/router";


  

export default function Details({ data }) {
  const router = useRouter();

  if (!data) {
    return (
        <Card
        sx={{
          maxWidth: "600px",
          background: "#b093c7",
          margin: "auto",
          marginTop: "50px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h2 sx={{ marginBottom: "20px" }}> Not Found</h2>
        </div>
  
        <CardActions>
          <Button
            size="small"
            onClick={() =>
              router.push({
                pathname: `/`,
              })
            }
          >
            Go Back
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        maxWidth: "600px",
        background: "#b093c7",
        margin: "auto",
        marginTop: "50px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 sx={{ marginBottom: "20px" }}>{data?.location?.name} Weather</h2>
        {data?.current?.is_day ? <h2>Day</h2> : <h2>Night</h2>}
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Condition: {data?.current?.condition?.text}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            Temperature: {data?.current?.temp_c} °C
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Feels Like: {data?.current?.feelslike_c} °C
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            Wind Speed: {data?.current?.wind_kph}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Cloud: {data?.current?.cloud}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            Pressure: {data?.current?.pressure_in}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Humidity: {data?.current?.humidity}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            Wind Direction: {data?.current?.wind_dir}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Wind-degree: {data?.current?.wind_degree}
          </Typography>
        </div>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          onClick={() =>
            router.push({
              pathname: `/`,
            })
          }
        >
          Go Back
        </Button>
      </CardActions>
    </Card>
  );
}

export async function getServerSideProps({ query }) {
    try {
      const { location } = query;
      const URL = `http://api.weatherapi.com/v1/current.json?key=c4218056f98e4f299d1152941241402&q=${location}&aqi=no`;
      const response = await axios.get(URL);
      const data = response.data;
      console.log(response);
      return { props: { data } };
    } catch (error) {
      return { props: { data: null } };
    }
  }
  