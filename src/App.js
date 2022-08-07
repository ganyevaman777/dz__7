import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ButtonPage from "./Pages/buttonPage/ButtonPage";
import InputPage from "./Pages/inputPage/InputPage";
import NewPage from "./Pages/newPage/NewPage";
import RequestPage from "./Pages/requestPage/RequestPage";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import ContactPage from "./Pages/contactPage/ContactPage";
import CountPage from "./Pages/countPage/CountPage";
import MainPage from "./Pages/mainPage/MainPage";
import UserPage from "./Pages/userPage/userPage";



function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Header/>
              <Routes>
                  <Route path="/" element={<ButtonPage/>}/>
                  <Route path="/input" element={<InputPage/>}/>
                  <Route path="/new" element={<NewPage/>}/>
                  <Route path="/request" element={<RequestPage/>}/>
                  <Route path="/contact" element={<ContactPage/>}/>
                  <Route path="/count" element={<CountPage/>}/>
                  <Route path="/main" element={<MainPage/>}/>
                  <Route path="/user" element={<UserPage/>}/>
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
