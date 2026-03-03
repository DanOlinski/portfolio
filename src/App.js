import './App.scss';
import * as React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Loading from "./components/Loading";

function App() {

  return (
    <>
    <div className='bg'>
      <Loading />
      <Resume />
      <Header />
      <Content />
      <Email />
      <Footer />
    </div> 
      </>
  );
}

export default App;
