import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {Link} from 'react-router-dom'
import { IconButton, ListItem } from '@mui/material';
import {
    DeleteOutline,
    Edit,
    ExpandMore,
    ExpandLess,
    LabelImportantOutlined,
} from '@mui/icons-material';


export default function PetListItem(props) {
    const {
        petFieldData,
        petType
    } = props
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }} >
            <ListItem
                    secondaryAction={
                        <div>
                            <Link to={'/edit-pet'}>
                                <IconButton edge="end" aria-label="edit">
                                    <Edit sx={{ color: 'green' }}/>
                                </IconButton>
                            </Link>
                            <Link to={'/edit-pet'}>
                                <IconButton  edge="end" aria-label="delete" sx={{ padding: 2}}>
                                    <DeleteOutline color="secondary"/>
                                </IconButton>
                            </Link>
                        </div>
                    }>
                <ListItemButton disableRipple onClick={handleClick}>
                    <ListItemIcon>
                        <LabelImportantOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary={petType}
                        secondary="Name, Breed, Location, Age, Sex"
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                    petFieldData.map((item, i)=>(
                        <ListItemButton key={i} disableRipple sx={{ pl: 9 }}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.data} />
                        </ListItemButton>
                    ))
                    }
                </List>
            </Collapse>
        </List>
    );
};