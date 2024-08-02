import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import React from "react";
import { blue } from "@mui/material/colors";

const Header = () => {

    const navItemStyle = {
        mx: 1.5, // Margin between items
        fontWeight: '500', // Semi-bold
        textTransform: 'uppercase', // Uppercase text
        color: 'text.secondary', // Subtle color
        transition: 'color 0.3s ease', // Smooth color transition
        '&:hover': {
            color: blue[500], // Change color on hover
            cursor: 'pointer' // Pointer cursor on hover
        }
    };

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