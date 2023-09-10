import React from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { dashboardTheme } from "./dashboardTheme.js";



ReactDOM.render(
   <ThemeProvider theme={dashboardTheme}>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />}>
            </Route>
         </Routes>
      </BrowserRouter>
   </ThemeProvider>
   , document.getElementById('root'));