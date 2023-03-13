import React from 'react'
import { Typography, Button, Stack } from '@mui/material'
import BodyPartImg from '../assets/icons/body-part.png';
import TargetImg from '../assets/icons/target.png';
import EquipmentImg from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
  console.log(exerciseDetail)
  const{bodyPart, gifUrl, name, target, equipment}=exerciseDetail

  const extraDetail=[
    {
      icon: BodyPartImg,
      name : bodyPart
    },
    {
      icon: TargetImg,
      name : target
    },
    {
      icon: EquipmentImg,
      name : equipment
    }
  ]
  
  return (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'}, p:'20px', alignItems:'center'}}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
      <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
        <Typography variant='h3'>
          {name}
        </Typography>
        <Typography>
          Exercises keep you strong. {name} {` `} is one of the best exercises to target your {target}. it will help you improve your mood and gain energy. 
        </Typography>
      {extraDetail.map((item) =>(
        <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
        <Button sx={{background:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
          <img src={item.icon} alt={bodyPart} style={{width:'50%', height:'50%'}}/>
          </Button>  
          <Typography variant='h5' textTransform='capitalize'>
            {item.name}
          </Typography>

        </Stack>
      ))}
      </Stack>
    </Stack>
  )
}

export default Detail