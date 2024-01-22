
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Wishlist from './pages/wishlist/Wishlist';
import Detail from './pages/Detail/Detail';
import Add from './pages/Add/Add';
function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="wish" element={<Wishlist />}/>
          <Route path="detail/:id" element={<Detail />}/>
          <Route path="add" element={<Add />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
