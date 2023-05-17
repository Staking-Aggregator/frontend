import React from "react";
import { TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const CustomTextBox = styled(TextField)(({ theme }) => ({
    '.MuiInputLabel-root':{
        color:'white'
    },
    '&:hover':{
        color:'white'
    },
    '& .MuiInputBase-input':{
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
      },
  }));

function AppTextBox({ children, styles, onClick,label }) {
  return (
    <CustomTextBox sx={styles} onClick={onClick} label={label}>
      {children}
    </CustomTextBox>
  );
}

export default AppTextBox;
