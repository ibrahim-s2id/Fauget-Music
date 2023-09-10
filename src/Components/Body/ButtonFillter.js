import React from 'react'
import { Button, Stack } from '@mui/material'

const ButtonFillter = () => {
    const filterStyle = {
        stackfilter: {
            pl: 5,
            pr: 5,
            display:"flex",
            flexWrap:"wrap",
            
        },
        button: {
            p: "10px 20px",
            mt:"5px",
            mb:"5px",
            borderRadius: "50px",
            backgroundColor: "#3b3b3b",
            width:"150px",
            color: "#fff",
            "&:hover": {
                backgroundColor: "#f056e9",
            }
        }
    }
    return (
        <Stack direction="row" justifyContent="space-between" sx={filterStyle.stackfilter}>
            <Button variant='text' sx={filterStyle.button}>For You</Button>
            <Button variant='text' sx={filterStyle.button}>Popular</Button>
            <Button variant='text' sx={filterStyle.button}>Trend</Button>
            <Button variant='text' sx={filterStyle.button}>Pop</Button>
            <Button variant='text' sx={filterStyle.button}>EDM</Button>
            <Button variant='text' sx={filterStyle.button}>rock</Button>
            <Button variant='text' sx={filterStyle.button}>More</Button>
        </Stack>

    )
}

export default ButtonFillter
