import { Analytics, DeviceHub, PhoneIphone } from "@mui/icons-material";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import React from "react";

const cardContents = [
    {
        icon: <Analytics fontSize="inherit" sx={{ fontSize: 80, mb: 1 }} />,
        title: "Website Analysis",
        description: "Detailed analysis to understand the performance of your website."
    },
    {
        icon: <PhoneIphone fontSize="inherit" sx={{ fontSize: 80, mb: 1 }} />,
        title: "App Installs / In-App Purchase",
        description: "Boost your app installs and increase in-app purchases."
    },
    {
        icon: <DeviceHub fontSize="inherit" sx={{ fontSize: 80, mb: 1 }} />,
        title: "Lead Generation",
        description: "Generate high-quality leads for your business."
    }
];

const What = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundImage: `linear-gradient(105deg, ${grey[100]} 0%, ${blue[100]} 100%)`,
                overflow: 'hidden',
                justifyContent: 'start',
                alignItems: 'center',
                py: 6,
                px: isSmallScreen ? 2 : 5, // Adjust padding based on screen size
            }}
        >
            <Box
                sx={{
                    textAlign: isSmallScreen ? 'center' : 'left', // Center text on small screens
                    borderRadius: 2,
                    mb: 4,
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        lineHeight: 1.2,
                        fontSize: isSmallScreen ? '1.5rem' : '2.125rem', // Adjust font size based on screen size
                    }}
                >
                    We have mastered the Art of Running Campaigns For
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {cardContents.map((card, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        display="flex"
                        justifyContent="center"
                    >
                        <Box
                            sx={{
                                width: 200,
                                height: 200,
                                textAlign: 'center',
                                p: 4,
                                borderRadius: 3,
                                boxShadow: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    boxShadow: 8,
                                },
                            }}
                        >
                            {card.icon}
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    color: blue[900],
                                }}
                            >
                                {card.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                component="div"
                                sx={{ mt: 1 }}
                            >
                                {card.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default What;