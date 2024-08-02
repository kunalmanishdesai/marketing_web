import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import React from "react";

const Header = () => {

    return (
        <Box sx={{ flexGrow: 1,maxHeight: '64px',}}>
            <AppBar position="static" color="transparent" sx={{ 
                boxShadow: 'none', // Removes the shadow
                padding: '0 20px' // Optional: add padding to the sides
            }}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="logo"
                        >
                            <Home fontSize="large" sx={{ mr: 1 }} />
                        </IconButton>
                        <Typography variant="h6" component="div">
                            Abc Advertising
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;