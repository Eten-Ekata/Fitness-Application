import React, {useContext, useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from "@mui/material"
import { fetchData, exerciseOptions } from '../utils/fetchData'
import FitnessContext from '../context/FitnessContext'
import ExerciseCard from './ExerciseCard'
const Exercises = () => {
  const{exercises, bodyParts}=useContext(FitnessContext)
  // console.log(bodyParts)
  const[currentPage, setCurrentPage] = useState(1)
  const exercisePerPage=9;
  const paginate=(e, value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1600, behavior:'smooth'})
  }
  const IndexOfLastExercise=currentPage * exercisePerPage;
  const IndexOfFirstExercise=IndexOfLastExercise - exercisePerPage;
  const currentExerises= exercises.slice(IndexOfFirstExercise, IndexOfLastExercise);
  return (
    <Box sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'> Showing Results</Typography>
      <Stack direction='row' sx={{gap:{lg:'110px', xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
      {currentExerises.map((exercise, index)=>(
        <ExerciseCard key={index} exercise={exercise}/>
))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length>9 && (
          <Pagination 
          color='primary'
          shape='rounded'
          variant="outlined"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisePerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
           />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises