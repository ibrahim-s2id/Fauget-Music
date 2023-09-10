import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
// import { useLocation } from "react-router-dom";
import Menu from "./Components/Menu/Menu"
import Body from "./Components/Body/Body";
function App() {

    return (
        <Grid container>
            <Menu/>
            <Body/> 
        </Grid>
    )
}
export default App;