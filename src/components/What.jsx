import { Analytics, DeviceHub, PhoneIphone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import React from "react";

const What = () => {
    return (
        <Box
            sx={{
                width: '100%',    // Full width of the parent
                height: '50vh',  // Full viewport height
                display: 'flex',
                flexDirection: 'column',
                backgroundImage: `linear-gradient(105deg, ${grey[100]} 0%, ${blue[100]} 100%)`, // Gradient background
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
                    We have mastered the Art of Running Campaigns For
                </Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    pt: 10,
                    px: 5,
                }}
            >
                <Box
                    sx={{
                        maxWidth: 200,
                        height: 150,
                        textAlign: 'center',
                        p: 4,
                        borderRadius: 3, // Rounded corners
                        boxShadow: 5, // Enhanced shadow for more depth
                        display: 'flex',
                        flexDirection: 'column', // Column direction to stack content
                        justifyContent: 'space-between', // Space out content vertically
                        alignItems: 'center', // Center content horizontally
                        '&:hover': {
                            transform: 'scale(1.02)', // Slight scale effect on hover
                            boxShadow: 8, // Increased shadow on hover
                        },
                    }}
                >
                    <Box>
                        <Analytics fontSize="inherit" sx={{ fontSize: 80, mb: 1 }} />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: 'bold',
                                color: blue[900], // Darker color for better contrast
                            }}
                        >
                            Website Analysis
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        maxWidth: 200,
                        height: 150,
                        textAlign: 'center',
                        p: 4,
                        borderRadius: 3, // Rounded corners
                        boxShadow: 5, // Enhanced shadow for more depth
                        display: 'flex',
                        flexDirection: 'column', // Column direction to stack content
                        justifyContent: 'space-between', // Space out content vertically
                        alignItems: 'center', // Center content horizontally
                        '&:hover': {
                            transform: 'scale(1.05)', // Slight scale effect on hover
                            boxShadow: 20, // Increased shadow on hover
                        },
                    }}
                >
                    <Box>
                        <PhoneIphone fontSize="inherit" sx={{ fontSize: 80, mb: 1 }} />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: 'bold',
                                color: blue[900], // Darker color for better contrast
                            }}
                        >
                            App Installs / In-App Purchase
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        maxWidth: 200,
                        height: 150,
                        textAlign: 'center',
                        p: 4,
                        borderRadius: 3, // Rounded corners
                        boxShadow: 5, // Enhanced shadow for more depth
                        display: 'flex',
                        flexDirection: 'column', // Column direction to stack content
                        justifyContent: 'space-between', // Space out content vertically
                        alignItems: 'center', // Center content horizontally
                        '&:hover': {
                            transform: 'scale(1.02)', // Slight scale effect on hover
                            boxShadow: 8, // Increased shadow on hover
                        },
                    }}
                >
                    <Box>
                        <DeviceHub fontSize="inherit" sx={{ fontSize: 80, mb: 1 }} /> 
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: 'bold',
                                color: blue[900], // Darker color for better contrast
                            }}
                        >
                            Lead Generation
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}

export default What;