import React from 'react'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ConstLinks1, ConstLinks2 } from './ConstLinks';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import ListSubheader from '@mui/material/ListSubheader';
import FourKIcon from '@mui/icons-material/FourK';

const ListItems = () => {
    const listItemsStyles = {
        listItems: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: 700,
            color: "white",
            backgroundColor: "#3b3b3b"
        },
        divider: {
            flexGrow: "1",
            marginLeft: "10px",
            color: "white"
        },

    }
    return (
        <div>
            <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
                <FourKIcon sx={{ color: "white" }} />
                <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700, color: "white" }}>
                    Fauget
                </Typography>
            </Toolbar>
            <List>
                <ListSubheader component="div" sx={listItemsStyles.listItems}>
                    Menu
                    <Divider sx={listItemsStyles.divider} />
                </ListSubheader>
                {ConstLinks1.map((item) => (
                    <ListItem key={item.id} disablePadding sx={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon sx={{ color: "white" }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List>
                <ListSubheader component="div" sx={listItemsStyles.listItems}>
                    My Playlist
                    <Divider sx={listItemsStyles.divider} />
                </ListSubheader>
                {ConstLinks2.map((item) => (
                    <ListItem key={item.id} disablePadding sx={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <QueueMusicIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default ListItems
