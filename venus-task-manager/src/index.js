import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import App from './App';
import './index.css';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Settings from './Pages/Settings/Settings';
import Tasks from './Pages/Tasks/Tasks';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}>
          <Route path='' element={<Home />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='projects' element={<Projects />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
