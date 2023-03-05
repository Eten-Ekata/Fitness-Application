import React from 'react'
import { Box } from '@mui/material'
import {Oval} from 'react-loader-spinner'


const Spinner = () => {
  return (
    <Box>
        <Oval
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
    
    />
    </Box>
  )
}

export default Spinner