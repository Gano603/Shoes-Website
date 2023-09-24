import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./web_components/Navbar"
import './styles/App.scss'
import Notification_banner from "./web_components/notification_banner"
import Home from "./Home"
import { BOOTS } from "./BOOTS"

function App() {
  return (
    <>
    <BrowserRouter>
    <Notification_banner />
    <Navbar />
    <Routes>
      <Route path={"/"} element={<Home />}/>
      <Route path={"/boots"} element={<BOOTS />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
