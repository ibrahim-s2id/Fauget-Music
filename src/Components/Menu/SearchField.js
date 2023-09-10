import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';
import avatarImg from '../../assets/images/singer3.jpg';
const SearchField = () => {
    return (
        <Stack sx={{display: 'flex',flexDirection:"row", alignItems: 'center',width: 400,}}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',width: 350, borderRadius: "30px", backgroundColor: "#3b3b3b" }}
            >
                <IconButton type="button" sx={{ p: '10px', color: "white" }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1, color: "white" }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px', color: "white" }} aria-label="search">
                    <KeyboardVoiceIcon />
                </IconButton>
            </Paper>
            <Avatar alt="Remy Sharp" sx={{ml: '10px',}} src={avatarImg} />
        </Stack>
    )
}

export default SearchField
