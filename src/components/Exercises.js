import React, {useContext, useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from "@mui/material"
import { fetchData, exerciseOptions } from '../utils/fetchData'
import FitnessContext from '../context/FitnessContext'
const Exercises = () => {
  const{exercises, bodyParts}=useContext(FitnessContext)
  // console.log(bodyParts)
  return (
    <Box sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'> Showing Results</Typography>
      <Stack direction='row' sx={{gap:{lg:'110px', xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
      {exercises.map((exercise, index)=>(
        <p>{exercise.name}</p>
      ))}
      </Stack>
    </Box>
  )
}

export default Exercises