import { Box, Stack, Typography } from '@mui/material'
import React, {useContext} from 'react'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import FitnessContext from '../context/FitnessContext';
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography  onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const HorizontalScrollbar = () => {
  const{bodyParts}=useContext(FitnessContext)
  //console.log(bodyParts)
  return (
    <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}> 
    <Stack alignItems='center' justifyContent='center'>
    </Stack>
    {bodyParts.map((item)=>(
    <Box 
    key={item.id || item}
    itemId={item.id || item}
    title={item.id || item}
    m='0 40px'
    >
    <BodyPart item={item} />

    </Box>))}
    
    </ScrollMenu>
  )
}

export default HorizontalScrollbar