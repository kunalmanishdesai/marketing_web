import { Analytics, PhoneIphone, DeviceHub } from "@mui/icons-material";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const cardContents = [
    {
        icon: <Analytics fontSize="inherit" sx={{ fontSize: 40, mb: 1 }} />,
        title: "Consumer Analysis",
        description: "You cannot sell a shampoo to a Bald Person. Breaking down basic Demographic, Behaviour & Interest patterns is the first step of a Campaign Planning & we never skip the Basics"
    },
    {
        icon: <PhoneIphone fontSize="inherit" sx={{ fontSize: 40, mb: 1 }} />,
        title: "Create Funnels",
        description: "We design high-converting Funnels that take potential customers from Being Aware to Becoming Loyal Recurring Buyers"
    },
    {
        icon: <DeviceHub fontSize="inherit" sx={{ fontSize: 40, mb: 1 }} />,
        title: "Creative Strategy",
        description: "Creative is the New Targeting, hence we take full ownership to design a Creative Strategy right from Creative Type, Format, Hooks & Pain points to be Used, Etc to make sure High CTRs, Low CPMs & Better Performance"
    },
    {
        icon: <Analytics fontSize="inherit" sx={{ fontSize: 40, mb: 1 }} />,
        title: "Product Pricing Strategy",
        description: "We believe, if pricing is done correctly, it will impact a large percentage of Business Metrics. Hence we test multiple pricing models for a product to help achieve business goals at a desired Unit Economics"
    },
    {
        icon: <PhoneIphone fontSize="inherit" sx={{ fontSize: 40, mb: 1 }} />,
        title: "CRO for Website & Sales Pages",
        description: "Product Page is the Sales Person in Performance Marketing, hence from speed to content, design, experience - we provide an extensive feedback & work closely with Brand Teams to make sure - we have a Brilliant Website Conversion Rate"
    },
    {
        icon: <DeviceHub fontSize="inherit" sx={{ fontSize: 40, mb: 1 }} />,
        title: "Analytics & Data",
        description: "Tracking Data & Making sense out of it is the most crucial part, we know how to just do it right"
    },
];

const How = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const renderCards = (cards) => (
        <Grid container spacing={3} justifyContent="center">
            {cards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center" key={index}>
                    <Box
                        sx={{
                            perspective: 1000, // Perspective for the 3D effect
                            height: 200, // Card height
                            width: 300,
                            backgroundColor: "transparent",
                            my: 3,
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.6s',
                                transformOrigin: 'center',
                                '&:hover': {
                                    transform: 'rotateY(180deg)', // Rotate the inner box on hover
                                },
                                // transform: 'rotateY(180deg)'
                            }}
                        >
                            {/* Front Side */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backfaceVisibility: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    borderRadius: 3,
                                    boxShadow: 5,
                                }}
                            >
                                {card.icon}
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {card.title}
                                </Typography>
                            </Box>

                            {/* Back Side */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backfaceVisibility: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    borderRadius: 3,
                                    boxShadow: 5,
                                    transform: 'rotateY(180deg)',
                                }}
                            >
                                <Typography variant="body2" component="div" sx={{ mt: 1, mx: 2 }}>
                                    {card.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden', // Prevents overflow of content
                justifyContent: 'center', // Align content at the top
                alignItems: 'center', // Center content horizontally
                py: 3,
            }}
        >
            <Box
                sx={{
                    textAlign: isSmallScreen ? 'center' : 'left',
                    borderRadius: 2,
                    px: 2,
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        lineHeight: 1.2,
                        mb: 4,
                        fontSize: isSmallScreen ? '1.5rem' : '2.125rem', // Adjust font size based on screen size
                    }}
                >
                    How we deliver Amazing Results
                </Typography>
            </Box>

            {renderCards(cardContents)}

        </Box>
    );
}

export default How;