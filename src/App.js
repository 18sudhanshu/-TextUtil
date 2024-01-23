import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';

//React Router import
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  //this (State) is use for (Alert)
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  
  }
  //this (State) is use for  (Enable dark mode)
  const[mode,setMode]=useState('light') //whether the dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='grey';
      //call showAlert funtion from (Alert {state})
      showAlert("Dark Mode Has Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.background='white';
      //call showAlert funtion from (Alert {state})
      showAlert("Light Mode Has Enabled","success")
    }
  }
  return(
    <>
{/* <Navbar title="TextUtill" aboutTeaxt="About UtilTitle"/> */}
{/* <Navbar/> */}
<Router>
      <Navbar title='Text-Util' mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
   <div className="container my-3">
      <Routes>
        <Route exect path="/about" element={<About/>}></Route>
        <Route exect path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
        </Route>
      </Routes>
    </div>
</Router> 

    </>
  );
  
}

export default App;
