import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function Navbar() {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Button href="/" variant="contained" endIcon={<HomeIcon />}>Home</Button>
                <Button href="/about" variant="contained">About</Button>
                <Button href="/products" variant="contained" endIcon={<ProductionQuantityLimitsIcon />}>Produto</Button>
                <Button href="/contact" variant="contained" endIcon={<ContactPageIcon />}>Contatos</Button>
            </Box>
        </React.Fragment>
    )
}