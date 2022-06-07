import axios from "axios";
import { STRAVA_URL } from './config/general';
import './App.css';
import { useEffect } from "react";
import  Interface from "./components/Interface"

function App() {

  const getInitialData = async () => {
    try { 
      const result = await axios.get(STRAVA_URL)
      console.log(result)
    } catch (error) {
      console.log("axios error", error)
    }

  }

  useEffect(() => {
    getInitialData()
  }, [])



  return (
    <>
    <h1>hello</h1>
    <Interface />
    </>
 
  );
}

export default App;
