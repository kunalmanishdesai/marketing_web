import { Box, Typography } from "@mui/material";
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
    // Divide icons into two rows
    const firstRowIcons = icons.slice(0, 5);
    const secondRowIcons = icons.slice(5);

    const renderIcons = (icons) => (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                py: 2,
            }}
        >
            {icons.map((icon, index) => (
                <Box
                    key={index}
                    sx={{
                        width: 100,
                        height: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 2,
                        borderRadius: 4,
                        backgroundColor: 'white',
                        boxShadow: 3,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <Box sx={{ zIndex: 2 }}>
                        {icon.icon}
                    </Box>
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
                    We Cover All Super-Scalable Channels
                </Typography>
            </Box>

            {renderIcons(firstRowIcons)}
            {renderIcons(secondRowIcons)}
        </Box>
    );
}

export default SocialMediaPara;