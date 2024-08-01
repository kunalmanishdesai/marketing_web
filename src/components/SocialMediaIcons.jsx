import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const SocialMediaIcons = () => {
    const icons = [
        { component: <Facebook />, label: 'Follow us on Facebook', url: 'https://www.facebook.com' },
        { component: <Twitter />, label: 'Follow us on Twitter', url: 'https://www.twitter.com' },
        { component: <Instagram />, label: 'Follow us on Instagram', url: 'https://www.instagram.com' },
        { component: <LinkedIn />, label: 'Connect with us on LinkedIn', url: 'https://www.linkedin.com' },
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            {icons.map((icon, index) => (
                <Tooltip title={icon.label} key={index}>
                    <IconButton
                        component="a"
                        href={icon.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: 'text.primary',
                            transition: 'transform 0.3s, color 0.3s',
                            '&:hover': {
                                color: 'primary.main',
                                transform: 'scale(1.2)',
                            },
                            mx: 2,
                            fontSize: 'large'
                        }}
                    >
                        {icon.component}
                    </IconButton>
                </Tooltip>
            ))}
        </Box>
    );
};

export default SocialMediaIcons;