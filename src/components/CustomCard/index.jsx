import React from 'react';
import Card from '@mui/material/Card';
import { alpha, styled } from "@mui/material/styles";

const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor:'#161616',
    color:'#f4f4f4',
    padding:'2rem',
    borderRadius:8
}));
function AppCard({children,styles}) {
  return (
    <CustomCard sx={styles}>{children}</CustomCard>
  )
}

export default AppCard;