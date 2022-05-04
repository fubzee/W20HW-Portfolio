import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import './styles/App.css';
import Landing from './components/main'
import Contacts from './components/contacts';
import About from './components/aboutme';
import Projects from './components/projects';

function App() {
  return (
  <Router>
          <div>
          <Routes>
              <Route 
              path="/" 
              element={< Landing/>} 
              />
              <Route 
              path="/aboutme" 
              element={< About/>} 
              />
              <Route 
              path="/projects" 
              element={ <Projects />} 
              />
              <Route 
              path="/contacts" 
              element={< Contacts />} 
              />
          </Routes>  
      </div>
    </Router>
  );
}
export default App;