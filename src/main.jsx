import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'
import Exams from './Components/Exams/Exams'
import Footer from './Components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Banner/>
    <About/>
    <Exams/>
    <Footer/>
  </React.StrictMode>,
);