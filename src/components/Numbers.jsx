import { Box, Typography } from "@mui/material";
import { grey, blue, green } from "@mui/material/colors";
import React from "react";

const stats = [
    { label: 'Global Brands', value: '85+', color: green[500] },
    { label: 'Quarterly Spends Managed', value: '$2 Million', color: blue[500] },
    { label: 'Average ROAS (for FB & Google)', value: '3.89+', color: grey[700] },
    { label: 'Average ACoS (for Amazon)', value: '23%', color: grey[700] },
];

const NumbersPara = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: grey[100],
                py: 5,
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontWeight: 700,
                    color: blue[700],
                    mb: 4,
                }}
            >
                Let’s Talk Numbers
            </Typography>

            <Box
                sx={{
                    width: '80%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 4,
                }}
            >
                {stats.map((stat, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: 2,
                            boxShadow: 3,
                            p: 3,
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: stat.color,
                                mb: 1,
                            }}
                        >
                            {stat.value}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: grey[600],
                            }}
                        >
                            {stat.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default NumbersPara;