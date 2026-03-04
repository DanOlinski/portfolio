import * as React from 'react';
// import React, { useEffect, useRef } from "react";
import "./Loading.scss";
import globalStates from '../hooks/globalStates';
// import axios from "axios";

export default function SiteDown() {
  const { setSiteDown, loading, setLoading, click, url, setUrl } = globalStates()


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


React.useEffect(() => {
  console.log("Checking:", url);
  if (loading) {

    const timeoutAction = () => {
      if (loading) {
        setLoading(false);
        setSiteDown('open');  // shows your "site down" UI
        // NO auto-open - user sees error, can retry manually
      }
    };

    const timeoutId = setTimeout(timeoutAction, 1500);  // 1.5s timeout

    fetch(url, {
      method: 'HEAD',
      mode: 'no-cors',  // skips CORS check
      signal: AbortSignal.timeout(1500)  // cancels after 1.5s
    })
      .then(() => {
        clearTimeout(timeoutId);
        if (loading) {
          setLoading(false);
          setSiteDown('siteLoaded');
          setUrl(false)
          // Only open on success
          if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
            setUrl(false)
          }
        }
      })
      .catch(() => {
        // Timeout or any fail → treat as down
        clearTimeout(timeoutId);
        timeoutAction();  // show down UI
        setUrl(null)
      });
  }
  // eslint-disable-next-line
}, [click]);

  
  //----------------
  return (
    <>
    {renderLoading()}
    </>
  );
}