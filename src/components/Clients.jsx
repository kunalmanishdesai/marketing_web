import { Box, Typography } from "@mui/material";
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
    // Divide clients into two rows
    const firstRowClients = clients.slice(0, 4);
    const secondRowClients = clients.slice(4);

    const renderClients = (clients) => (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                py: 2,
            }}
        >
            {clients.map((client, index) => (
                <Box
                    key={index}
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
            ))}
        </Box>
    );

    return (
        <Box
            sx={{
                width: '100%',    // Full width of the parent
                height: '50vh',  // Full viewport height
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden', // Prevents overflow of content
                justifyContent: 'start', // Align content at the top
                alignItems: 'center', // Center content horizontally
                py: 3
            }}
        >
            <Box
                sx={{
                    textAlign: 'left', // Align text to the left
                    borderRadius: 2, // Rounded corners
                    mb: 5, // Margin bottom for spacing
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontWeight: 700, // Bolder font weight
                        color: 'text.primary',
                        lineHeight: 1.2, // Tighter line height for a compact look
                    }}
                >
                    Our Esteemed Clients
                </Typography>
            </Box>

            {renderClients(firstRowClients)}
            {renderClients(secondRowClients)}
        </Box>
    );
}

export default ClientsPara;