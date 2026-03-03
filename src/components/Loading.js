// import * as React from 'react';
import React, { useEffect, useRef } from "react";
import "./Loading.scss";
import globalStates from '../hooks/globalStates';
import axios from "axios";

export default function SiteDown() {
  const { schedulerApp, setSchedulerApp, setSiteDown, siteDown, urlValidation, setUrlValidation, loading, setLoading, click, setClick, url, url2, setUrl2 } = globalStates()


  const renderLoading=()=>{

    if(loading){

      return(
      <div  className='loadingContainer'>

<div className='loader'>


      
      
</div>
      </div>
      )
    }

  }


    useEffect(() => {

    // Check if the component has mounted
    if (loading) {
      console.log(url)
      // This code will only run on subsequent updates, not on the initial mount
          const timeOutAction = function () {
      // if(siteDown !== 'siteLoaded'){
        setLoading(false)
        setSiteDown('open')
      // }      
    }

    let timeOut1 = setTimeout(timeOutAction, 2000)

    axios.head(url)

      .then((resp) => {
        if (resp.status === 200 && loading) {
          clearTimeout(timeOut1)
          setLoading(false)
          setSiteDown('siteLoaded')

          if(url2){
            window.open(url2, '_blank', 'noopener,noreferrer');
            setUrl2(null)
          } else {
             window.open(url, '_blank', 'noopener,noreferrer');
          }
        }
      })
      .catch((resp) => {
        // setLoading(false)
        // setSiteDown('open')
        // console.log(resp + '!!!!!!!!!')
      })
    } 

  }, [click]);

  
  //----------------
  return (
    <>
    {renderLoading()}
    </>
  );
}