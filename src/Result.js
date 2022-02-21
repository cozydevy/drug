import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export default function Result() {
  const location = useLocation();

  console.log(location.state)
 


  return (
    <div>
      <Grid sx={{textAlign:"center"}}> <Typography  variant="h4" component="h1">Drug Interaction Report </Typography></Grid>

    </div>
  )
}
