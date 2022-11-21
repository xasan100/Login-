import { useState } from "react";
import Footer from "../Components/Footer/index.jsx";
import Login from "../Components/Login/index.jsx";
import Navbar from "../Components/Navbar/index.jsx";
import Product from "../Components/Product/inde.jsx";


import "./App.css"
function App() {
 const [token,setToken]=useState(localStorage.getItem('userToken') ?? null) 
  return (
    <div className="App">
      <Navbar />
      {token ? <Product /> : <Login token={token} setToken={setToken} />}
      <Footer/>
    </div>
  );
}

export default App;
