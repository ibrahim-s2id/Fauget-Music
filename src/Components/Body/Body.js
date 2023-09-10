import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import soungImg from '../../assets/images/soung.png';
import ButtonFillter from './ButtonFillter';
import MusicBox from './MusicBox';
import { ClassNames } from '@emotion/react';

const drawerWidth = 240;

const Body = () => {
    const bodyStyles = {
        wrapperBody: {
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            mt: { xs: "120px", md: "60px" },
            height: { lg: `calc(100vh - 60px)` },
            backgroundColor: "#1f1f1f",
            boxShadow: "none"
        },
        boxDefine: {
            m: 5,
            mb: 2,
            p: 3,
            pt: 2,
            height: "auto",
            background: "linear-gradient(90deg, rgba(194,1,176,1) 0%, rgba(66,0,58,1) 100%)",
            flexDirection: { md: "column", lg: "row" },

        },
        boxWords: {
            width: { xs: "100%", lg: "70%" },
            textAlign: { xs: "center", lg: "start" },
            color: "white",
        },
        boxWordsStack: {
            width: { xs: "100%" },
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", lg: "start" },
            alignItems: { xs: "center" }
        },
        boxImage: {
            maxHeight: "280px",
            maxWidth: "280px",
            marginInline: { xs: "auto" },
        },
        mainBoxBtn1: {
            p: "10px 40px",
            borderRadius: "50px",
            backgroundColor: "#f056e2",
            color: "#fff"
        },
        mainBoxBtn2: {
            p: "10px 40px",
            borderRadius: "50px",
            border: "1px solid #f056e2",
            color: "#f056e2"
        },
    }
    return (
        <Box
            sx={bodyStyles.wrapperBody}>
            <Stack sx={bodyStyles.boxDefine}>
                <Box sx={bodyStyles.boxWords}>
                    <Stack direction="row" spacing={2} sx={bodyStyles.boxWordsStack} >
                        <HeadphonesIcon sx={{
                            fontSize: "40px",

                        }} />
                        <Typography sx={{
                            fontSize: "30px",
                            fontWeight: "100",
                            textAlign: { xs: "center", lg: "start" },

                        }}>No Ads & Unlock All Of Paid Songs</Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography variant='h1' sx={{
                            fontSize: { xs: "30px", sm: "50px", lg: "55px" },
                            m: 0,
                        }}>
                            Premium Membership
                        </Typography>
                        <Typography variant='body1'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                        <Stack direction="row" spacing={4} sx={{
                            justifyContent: { xs: "center", lg: "start" },
                        }}>
                            <Button variant='text' sx={bodyStyles.mainBoxBtn1} >Upgrade Now</Button>
                            <Button variant='text' size='large' sx={bodyStyles.mainBoxBtn2}>Learn More</Button>

                        </Stack>
                    </Stack>
                </Box>
                <Box
                    component="img"
                    sx={bodyStyles.boxImage}
                    src={soungImg}
                />
            </Stack>
            <ButtonFillter />
            <MusicBox />
        </Box >

    )
}

export default Body
