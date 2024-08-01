import { Analytics, PhoneIphone, DeviceHub } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const cardContents = [
    {
        icon: <Analytics fontSize="inherit" sx={{ fontSize: 50, mb: 1 }} />,
        title: "Consumer Analysis",
        description: "You cannot sell a shampoo to a Bald Person. Breaking down basic Demographic, Behaviour & Interest patterns is the first step of a Campaign Planning & we never skip the Basics"
    },
    {
        icon: <PhoneIphone fontSize="inherit" sx={{ fontSize: 50, mb: 1 }} />,
        title: "Create Funnels",
        description: "We design high-converting Funnels that take potential customers from Being Aware to Becoming Loyal Recurring Buyers"
    },
    {
        icon: <DeviceHub fontSize="inherit" sx={{ fontSize: 50, mb: 1 }} />,
        title: "Creative Strategy",
        description: "Creative is the New Targeting, hence we take full ownership to design a Creative Strategy right from Creative Type, Format, Hooks & Pain points to be Used, Etc to make sure High CTRs, Low CPMs & Better Performance"
    },
    {
        icon: <Analytics fontSize="inherit" sx={{ fontSize: 50, mb: 1 }} />,
        title: "Product Pricing Strategy",
        description: "We believe, if pricing is done correctly, it will impact a large percentage of Business Metrics. Hence we test multiple pricing models for a product to help achieve business goals at a desired Unit Economics"
    },
    {
        icon: <PhoneIphone fontSize="inherit" sx={{ fontSize: 50, mb: 1 }} />,
        title: "CRO for Website & Sales Pages",
        description: "Product Page is the Sales Person in Performance Marketing, hence from speed to content, design, experience - we provide an extensive feedback & work closely with Brand Teams to make sure - we have a Brilliant Website Conversion Rate"
    },
    {
        icon: <DeviceHub fontSize="inherit" sx={{ fontSize: 50, mb: 1 }} />,
        title: "Analytics & Data",
        description: "Tracking Data & Making sense out of it is the most crucial part, we know how to just do it right"
    },
];

const How = () => {
    const firstRowCards = cardContents.slice(0, 3);
    const secondRowCards = cardContents.slice(3);

    const renderCards = (cards) => (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                py: 5,
                px: 5,
            }}
        >
            {cards.map((card, index) => (
                <Box
                    key={index}
                    sx={{
                        width: 300,
                        height: 200,
                        perspective: 1000, // Perspective for the 3D effect
                        m: 4, // Margin for spacing between cards
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            position: 'relative', // Ensure positioning is relative to the container
                            transformStyle: 'preserve-3d',
                            transition: 'transform 0.6s',
                            transformOrigin: 'center',
                            '&:hover': {
                                transform: 'rotateY(180deg)', // Rotate the inner box on hover
                            },
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
                                p: 4,
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
                                p: 4,
                                backgroundColor: 'white',
                                borderRadius: 3,
                                boxShadow: 5,
                                transform: 'rotateY(180deg)',
                            }}
                        >
                            <Typography variant="body2" component="div" sx={{ mt: 1 }}>
                                {card.description}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );

    return (
        <Box
            sx={{
                width: '100%',    // Full width of the parent
                height: '100vh',  // Full viewport height
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
                    How we deliver Amazing Results
                </Typography>
            </Box>

            {renderCards(firstRowCards)}
            {renderCards(secondRowCards)}

        </Box>
    );
}

export default How;