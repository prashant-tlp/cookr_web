import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import ItemCardExp from "./components/itemcardExpand";
import FindRecipee from "./pages/findrecipee";
import AddRecipee from "./pages/addrecipee";
import Home from "./pages/home";

import MyRecipees from "./pages/myrecipees";




function App() {
  return (
    <BrowserRouter>
        
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/findrecipee" element={<FindRecipee />}></Route>
        <Route path="/addrecipee" element={<AddRecipee />}></Route>
        <Route path="/extcard" element={<ItemCardExp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/my-recipe" element={<MyRecipees/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
