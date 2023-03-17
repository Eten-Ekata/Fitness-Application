import React, {useContext} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import FitnessContext from '../context/FitnessContext'
import Spinner from './Spinner'

const SearchExercises = () => {
const{ setExercises, search, setSearch, isPending, exercises,bodyParts}=useContext(FitnessContext)

  const handleSearch= async ()=>{
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      setSearch('')
      setExercises(searchedExercises)
      console.log('no result found')

    }
    
  }

  return (
    <Stack alignItems='center' justifyContent='center' mt='37px' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px'}}} mb='50px' textAlign='center'>
      Awesome Exercises You <br />
      Should Know
      </Typography>
          <Box position='relative' mb='72px'>
        <TextField sx={{
          input:{fontWeight:'500', border:'none', borderRadius:'4px'},
          width:{lg:'800px', xs:'350px' },
          backgroundColor:'#fff',
          borderRadius:'90px',
        }} 
        height='76px'
        value={search}
        onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
        placeholder='Search Exercises'
        type='text'
        />
        <Button className='search-btn'
        sx={{bgcolor:'#ff2625', color:'#fff', width:{lg:'175px', xs:'80px'}, fontSize:{lg:'20px', xs:'14px'}, height:'56px', position:'absolute',right:0, textTransform:'none'
      }} onClick={handleSearch}
        >Search</Button>
      </Box>
      
      <Box> 
    {isPending && <Spinner/> }
    </Box>
      
      <Box sx={{position:'relative', width:'100%', p:'20px'}} >
      <HorizontalScrollbar body bodyParts={bodyParts}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises