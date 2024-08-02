import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { blue, green, orange, pink, purple, red } from '@mui/material/colors';
import Header from './Header';
import SocialMediaIcons from './SocialMediaIcons';

const Home = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                width: '100%',    // Full width of the parent
                pb: 8,
                display: 'flex',
                flexDirection: 'column',
                backgroundImage: `linear-gradient(45deg, ${blue[100]} 30%, ${green[100]} 90%)`, // Initial gradient background
                overflow: 'hidden', // Prevents overflow of content
                animation: 'color-change 40s infinite alternate ease-in-out', // Animation for background color change
                '@keyframes color-change': {
                    '0%': { backgroundImage: `linear-gradient(45deg, ${blue[100]} 30%, ${green[100]} 90%)` },
                    '25%': { backgroundImage: `linear-gradient(45deg, ${purple[100]} 30%, ${pink[100]} 90%)` },
                    '50%': { backgroundImage: `linear-gradient(45deg, ${orange[100]} 30%, ${red[100]} 90%)` },
                    '75%': { backgroundImage: `linear-gradient(45deg, ${green[100]} 30%, ${blue[100]} 90%)` },
                    '100%': { backgroundImage: `linear-gradient(45deg, ${pink[100]} 30%, ${purple[100]} 90%)` },
                },
            }}
        >
            <Header />

            <Box
                sx={{
                    flexGrow: 1, // Allows this Box to take up remaining space
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',   // Center content horizontally
                    justifyContent: 'center', // Center content vertically
                    textAlign: 'center', // Center align text
                    px: 2, // Padding for smaller screens
                    mt: isSmallScreen ? 2 : 3, // Margin top for spacing
                }}
            >
                <Box
                    sx={{
                        maxWidth: '900px', // Limit the width of the text container
                        borderRadius: 3, // Rounded corners
                        boxShadow: 20, // Slight shadow for elevation
                        p: 4,
                        // backgroundColor: 'background.paper', // Background color for contrast
                        backgroundBlendMode: 'multiply', // Blend gradient with background color
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h1"
                        sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary', fontSize: { xs: '1rem', sm: '1.25rem' } }}
                    >
                        We aspire to be the last agency you'll ever work with.
                    </Typography>

                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{ mb: 4, fontWeight: 'bold', color: 'text.primary', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
                    >
                        We are growth partners who care about you and your success.
                    </Typography>

                    <Typography
                        variant="body1"
                        component="p"
                        sx={{ mb: 3, color: 'text.secondary', fontSize: { xs: '0.875rem', sm: '1rem' } }}
                    >
                        Any worthwhile relationship requires work from both parties to be successful. We partner with our clients to understand the why behind your business, the goals you aspire to, and the impact this will have on your customers and business. We translate this into a unique and authentic marketing strategy to get us there together.
                    </Typography>

                    <Button variant="contained" sx={{ mt: 2, backgroundColor: '#000000', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                        Book a call now
                    </Button>
                    <SocialMediaIcons />
                </Box>
            </Box>
        </Box>
    );
}

export default Home;