import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import SpotLight from "./SpotLight/SpotLight";
import axios from "axios";
import { getSpotLightData } from './utils/index'

function App() {
  const [data, setData] = useState(null);

  const fetchDataOfNasa = async () => {
    try {
      const { data } = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=2022-10-01&end_date=2022-10-29&thumbs=true"
      );
      console.log("this is data:", data);
      setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataOfNasa();
  }, []);

  return (
    <div className="App">
      <Header />
      <SpotLight lastestData={getSpotLightData(data)} />
    </div>
  );
}

export default App;
