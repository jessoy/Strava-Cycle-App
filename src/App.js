import axios from "axios";
import { STRAVA_URL } from './config/general';
import './App.css';
import { useEffect } from "react";
import  Interface from "./components/Interface"
import Title from "./components/Title";
import React from "react";
import { connect, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const getInitialData = async () => {
    try { 
      const result = await axios.get(STRAVA_URL)
      console.log(result)

      dispatch({type: "SETAPIDATA", apiData: result})




    } catch (error) {
      console.log("axios error", error)
    }

  }

  useEffect(() => {
    getInitialData()
  }, [])



  return (
    <>
    <Title />
    <Interface />
    </>
 
  );
}

export default connect()(App);
