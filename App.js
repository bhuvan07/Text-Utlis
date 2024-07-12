import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode]= useState('light');
  const [alert,setAlert] = useState();
  const[text,setText] = useState('Enable Dark mode')
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setText('Disable Dark Mode');
      showAlert("Dark mode has been enabled.", "success");
      document.body.style.backgroundColor='#042743';
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(()=>{
      //    document.title = 'Install TextUtlis Now';
      // },1500);
    }
    else{
      setMode('light');
      setText('Enable Dark Mode');
      showAlert("Light mode has been enabled.","success");
      document.body.style.backgroundColor='white';
      document.title = 'TextUtils - Light Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(()=>{
      //    document.title = 'Install TextUtlis Now';
      // },1500);
    }
  }
  return (
<>
{/* <Router> */}
<Navbar title="Text Changer" about="About" mode={mode} text={text} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container  my-3">
{/* <Routes>
        <Route exact path="/about" element={<About />} /> */}
       
        <TextForm showAlert={showAlert} heading="Enter the text to edit" mode={mode} />
      {/* </Routes> */}
{/* <About/> */}
</div>
{/* </Router> */}


</>
  );
}

export default App;
