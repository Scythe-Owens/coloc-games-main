import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/header';
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import GamesManager from './pages/GamesManager/GamesManager';
import "./assets/styles/all.scss";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/jeux" element={<Games/>}/>
          <Route path="/parametres" element={<GamesManager/>}/>
          {/* <Route path="*" element={<Error/>}/> */}
        </Routes>
      </main>
      {/* <Footer/> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
