import React, {useContext, useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import FitnessContext from '../context/FitnessContext'
const Home = () => {
  // const [exercises, setExercises] = useState([])
  // const[bodyPart, setBodyPart]=useState('all')
  const{bodyPart, setBodyPart, exercises, setExercises}=useContext(FitnessContext)

  return (
    <Box>
      <HeroBanner />
      <SearchExercises/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home