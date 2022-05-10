import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"




function App() {
  const [mode, setMode] = useState("light") //is darkmodeenabled or not 
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#303134 '
      document.body.style.color = 'white '
      showAlert("darkmode is enabled", "success")
      // dynamically change title 
      document.title = "TextUtils ~darkmode"
      const accordionBody = document.querySelectorAll(`.accordion-body`)
      const accordionButton = document.querySelectorAll(`.accordion-button`)
      accordionBody.forEach( element => {
        element.style.backgroundColor = "#303134 "
      });
      accordionButton.forEach( element => {
        element.style.backgroundColor = "#303134 "
        element.style.color = "white "
      });
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white '
      document.body.style.color = 'black '
      showAlert("lightmode is enabled", "success")
      document.title = "TextUtils ~niks5595"
      document.querySelector(`.accordion-body`).style.backgroundColor = "white"
    }
  }




  return (
    <>
    <Router>
      {/* <Navbar title ="textUtilsNiks" aboutData = "aboutTextUtils"/> */}
      {/* <Navbar /> */}
      <Navbar title="textUtilsNiks" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
        <Route exact path='/about' element={<About/>}/>
          < Route exact path='/' element = {<Textform showAlert={showAlert} heading="Enter the text to analyze below" />}/>
        </Routes>
      </div>
      </Router>
            {/* <Textform showAlert={showAlert} heading="Enter the text to analyze below" /> */}
    </>
  );
}

export default App;
