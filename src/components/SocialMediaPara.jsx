import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillAmazonCircle } from "react-icons/ai";
import { SiTiktok, SiSnapchat, SiFlipkart } from "react-icons/si";

const icons = [
    { icon: <FaFacebookF size={60} color="#4267B2" />, label: 'Facebook' },
    { icon: <FaTwitter size={60} color="#1DA1F2" />, label: 'Twitter' },
    { icon: <FaInstagram size={60} color="#C13584" />, label: 'Instagram' },
    { icon: <FaLinkedinIn size={60} color="#0077B5" />, label: 'LinkedIn' },
    { icon: <IoLogoYoutube size={60} color="#FF0000" />, label: 'YouTube' },
    { icon: <SiTiktok size={60} color="#000000" />, label: 'TikTok' },
    { icon: <AiFillAmazonCircle size={60} color="#FF9900" />, label: 'Amazon Ads' },
    { icon: <SiFlipkart size={60} color="#2874F0" />, label: 'Flipkart Ads' },
    { icon: <SiSnapchat size={60} color="#FFFC00" />, label: 'Snapchat' },
];

const SocialMediaPara = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const renderIcons = (icons) => (
        <Grid container spacing={3} justifyContent={isSmallScreen ? "start" : "center"}  >
            {icons.map((icon, index) => (
                <Grid
                    item
                    xs={6} // 2 icons per row on extra small screens
                    sm={4} // 3 icons per row on small screens
                    md={3} // 4 icons per row on medium screens
                    lg={2.4} // 5 icons per row on large screens
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
                            borderRadius: 4,
                            backgroundColor: 'white',
                            boxShadow: 3,
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <Box>
                            {icon.icon}
                        </Box>
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
                backgroundImage: `linear-gradient(105deg, ${grey[100]} 0%, ${blue[100]} 100%)`, // Gradient background
                overflow: 'hidden', // Prevents overflow of content
                justifyContent: 'start', // Align content at the top
                alignItems: 'center', // Center content horizontally
                py: 3
            }}
        >
            <Box
                sx={{
                    textAlign: isSmallScreen ? 'center' : 'left', // Align text to the left or center based on screen size
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
                        fontSize: isSmallScreen ? '1.5rem' : '2.125rem', // Adjust font size based on screen size
                    }}
                >
                    We Cover All Super-Scalable Channels
                </Typography>
            </Box>

            {renderIcons(icons)}
        </Box>
    );
}

export default SocialMediaPara;