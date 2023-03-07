import React from 'react';
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from '@emotion/styled';


const CustomAppBar = styled(AppBar)(({ theme }) => ({
    palette:{
        primary:{
            main:'#a41313',
            pink:'#f80783'
        },
        secondary:{
            light: '#7af112',
            main: '#0044ff',
        }
    }
})
);

function Navbar() {
    return (
        <AppBar position="static" style={{color: "#f44336" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MY APP
                </Typography>
                <Link to="/" style={{ textDecoration: "none", color: "#f44336", marginLeft: 20}}>
                    ACCUEIL
                </Link>
                <Link to="/about" style={{ textDecoration: "none", color: "#f44336", marginLeft: 20 }}>
                    NOTRE HISTOIRE
                </Link>
                <Link to="/ceremony" style={{ textDecoration: "none", color: "#f44336", marginLeft: 20 }}>
                    CEREMONIE
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
