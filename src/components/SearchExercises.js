import React, {useContext} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import {Oval} from 'react-loader-spinner'
import FitnessContext from '../context/FitnessContext'

const SearchExercises = () => {
const{exercises, setExercises, search, setSearch, isPending}=useContext(FitnessContext)

  const handleSearch= async ()=>{
    if(search){
      const exerciseData= await fetchData( 'https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions)
      const searchedExercises=exerciseData.filter((exercise)=> 
      exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodypart.toLowerCase().includes(search))
      setSearch('')
      setExercises(searchedExercises)
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
    {isPending &&<Oval
  height={120}
  width={120}
  color="#ff2625"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#ff2625"
  strokeWidth={2}
  strokeWidthSecondary={2}

/> }


      </Box>
      <Box sx={{position:'relative', width:'100%', p:'20px'}} >
      <HorizontalScrollbar/>
      </Box>
    </Stack>
  )
}

export default SearchExercises