import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <Tooltip title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
            <IconButton 
                onClick={toggleTheme} 
                color="inherit"
                data-testid="dark-mode-toggle"
            >
                {isDarkMode ? (
                    <Brightness7 data-testid="theme-indicator-light" />
                ) : (
                    <Brightness4 data-testid="theme-indicator-dark" />
                )}
            </IconButton>
        </Tooltip>
    );
};

export default DarkModeToggle;
