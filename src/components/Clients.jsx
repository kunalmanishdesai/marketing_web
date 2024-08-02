import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

// Example client logos
const clients = [
    { src: 'https://example.com/logo-apple.png', alt: 'Apple' },
    { src: 'https://example.com/logo-google.png', alt: 'Google' },
    { src: 'https://example.com/logo-microsoft.png', alt: 'Microsoft' },
    { src: 'https://example.com/logo-aws.png', alt: 'AWS' },
    { src: 'https://example.com/logo-adobe.png', alt: 'Adobe' },
    { src: 'https://example.com/logo-spotify.png', alt: 'Spotify' },
];

const ClientsPara = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const renderClients = (clients) => (
        <Grid container spacing={3} justifyContent="center">
            {clients.map((client, index) => (
                <Grid
                    item
                    xs={6} // 2 icons per row on extra small screens
                    sm={4} // 3 icons per row on small screens
                    md={3} // 4 icons per row on medium screens
                    lg={2} // 6 icons per row on large screens
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    key={index}
                >
                    <Box
                        sx={{
                            width: 100,
                            height: 100,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 2,
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            boxShadow: 3,
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                                transform: 'scale(1.1)',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.3))',
                                    zIndex: 1,
                                    opacity: 0.5,
                                },
                            },
                        }}
                    >
                        <img
                            src={client.src}
                            alt={client.alt}
                            style={{
                                width: '80%',
                                height: '80%',
                                objectFit: 'contain',
                                zIndex: 2,
                            }}
                        />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Box
            sx={{
                width: '100%',    // Full width of the parent
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden', // Prevents overflow of content
                justifyContent: 'start', // Align content at the top
                alignItems: 'center', // Center content horizontally
                py: 3,
                pb: 6,
            }}
        >
            <Box
                sx={{
                    textAlign: isSmallScreen ? 'center' : 'left', // Center text on smaller screens
                    borderRadius: 2, // Rounded corners
                    mb: 5, // Margin bottom for spacing
                    px: 2, // Padding for smaller screens
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontWeight: 700, // Bolder font weight
                        color: 'text.primary',
                        lineHeight: 1.2, // Tighter line height for a compact look
                        fontSize: {
                            xs: '1.5rem', // Font size for extra small screens
                            sm: '1.75rem', // Font size for small screens
                            md: '2rem', // Font size for medium screens
                            lg: '2.125rem', // Font size for large screens
                        },
                    }}
                >
                    Our Esteemed Clients
                </Typography>
            </Box>

            {renderClients(clients)}
        </Box>
    );
}

export default ClientsPara;