import React from 'react';
import {Paper} from "@mui/material";
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <Link to ='/'>Pet list</Link>
                <Link to ='/add-new-pet'>Add New Pet</Link>
            </Paper>
        </div>
    );
};

export default Footer;