import express from 'express';
import fetch from "node-fetch";

// const express = require('express');

const app = express();
const port = 3000;

const apiKey = 'a5d41176d4b94693979140933232207';
const weatherApiUrl = `http://api.weatherapi.com/v1/current.json`;
const zipcode = '22301'; //Alexandria 

app.get('/weather', async (req, res) => {
  try {
    // const city = req.params.city;
    const apiUrl = `${weatherApiUrl}?key=${apiKey}&q=${city}&aqi=no`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const weatherInfo = {
        city: data.location.name,
        temperature: data.current.temp_c,
        description: data.current.condition.text,
      };
      res.json(weatherInfo);
    } else {
      throw new Error('Weather data not found.');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Weather microservice is running on http://localhost:${port}`);
});
