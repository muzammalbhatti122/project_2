import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/login/login';
import { Footer } from './components/footer/footer';
import { Section } from './components/section/section';
import { AllCards } from './components/allCards/AllCards.1';
import { AdminPanal } from './components/adminPanal/adminPanal';
import { Detail } from './components/detail/detail';
import { Signup } from './components/signup/signup';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function App() {

let dispatch = useDispatch();

  useEffect(() => {
   
   axios.post('/chek-token' , {
    token:localStorage.getItem('meraToken')
   }).then(function(resp){
    if(resp.data){
      dispatch({
        type:'LOGINHOGYA',
        paylode:resp.data
      })
    }
   })
  }, []);



  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Routes>

          <Route path={'/'} element={<Signup></Signup>}></Route>
          <Route path={'/login'} element={<Login></Login>}></Route>
          <Route path={'/section'} element={<Section></Section>}></Route>
          <Route path={'/product'} element={<AllCards></AllCards>}></Route>
          <Route path={'/admin'} element={<AdminPanal></AdminPanal>}></Route>
          <Route path={'/detail/:id'} element={<Detail></Detail>}></Route>
          



        </Routes>



      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
