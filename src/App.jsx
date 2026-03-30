// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useEffect } from 'react';
import './App.css'
import MainLeft from './components/mainLeft'
import MainRight from './components/mainRight'

function a() {
    alert("This functionality is yet to be configured !!");
}

function s(condition) {
    let menu = document.getElementsByClassName("main-left")[0];
    menu.style.left = (condition) ? "0" : "-76%";
}

function App() {

  useEffect(() => {
    console.log("ran");
    //Alert the user about the restrictions of the web site 
    // alert(" This web page uses GitHub api to retrieve files\n Since the API does not use any private/public access keys,\nthe retrieval of the files is limited.\n So, Only 60 reloads(retrievals) per hour per IP.");
    // getSongsNames();
    // resize_to_fit();
  }, []);
  // const [count, setCount] = useState(0)

  return (
    <div id='main'>
      <MainLeft s={s} a={a}/>
      {/* <div class="main-left">
        
      </div> */}
      <MainRight s={s} a={a}/>
      {/* <div class="main-right">
        
      </div> */}
    </div>
  )
}

export default App
