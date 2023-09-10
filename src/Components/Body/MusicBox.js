import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { ConstMusic } from './ConstMusic'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
const MusicBox = () => {
    const MusicBoxStyles = {
        boxImg: {
            width: 180,
            height: 180,
            borderRadius: '20px',
            mb: 2,
        },
        upImage: {
            position: "absolute",
            inset: 0,
            height: 180,
            borderRadius: "20px",
            cursor: "pointer",
        },
        upImageIcon: {
            position: "absolute",
            marginInline: "auto",
            marginBlock: "auto",
            inset: 0,
            fontSize: "70px",
            color: "white",
        },
    }
    return (
        <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap" mt={2} >
            {ConstMusic.map((item) => (
                <Box key={item.id} justifyContent="center" alignItems="center" sx={{
                    position: "relative"
                }}>
                    <Box component="img" sx={MusicBoxStyles.boxImg}
                        src={item.src}
                    />
                    <Typography textAlign="center" variant='h5' sx={{ color: "#fff" }}>{item.name}</Typography>
                    <Box sx={MusicBoxStyles.upImage}>
                        {<PlayCircleOutlineIcon sx={MusicBoxStyles.upImageIcon} />}
                    </Box>
                </Box>

            ))
            }
        </Stack >
    )
}

export default MusicBox
