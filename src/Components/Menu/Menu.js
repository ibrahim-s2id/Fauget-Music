import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchField from './SearchField';
import ListItems from './ListItems';

const drawerWidth = 240;
function Menu(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                    backgroundColor: "#1f1f1f",
                    boxShadow: "none"
                }}
            >
                <Toolbar sx={{
                    m: "20px",
                    flexDirection:{xs:"column-reverse",md:"row"},
                    // flexWrap:"wrap",
                    justifyContent: "space-between"
                }}>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none', color: "white" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ color: "white", fontWeight: "500" }}>
                        Welcome, Claudia Alves!
                    </Typography>
                    <SearchField />
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#3b3b3b", },
                    }}
                >
                    <ListItems />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        bgcolor: "#3b3b3b",
                        backgroundColor: "#1f1f1f",
                        display: { xs: "none", md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#3b3b3b", },
                    }}
                    open
                >
                    <ListItems />
                </Drawer>
            </Box>
        </Box>
    )
}

export default Menu
