import React from 'react'
import { Button } from '@mui/material';
import { alpha, styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor:'#1d1e1f',
    color:'#f4f4f4',
    borderRadius:8
  }));

function AppButton({children,styles}) {
  return (
    <CustomButton sx={styles}>{children}</CustomButton>
  )
}

export default AppButton