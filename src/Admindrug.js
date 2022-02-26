import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';
import Header from "./Header";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";

import axios from "axios";
export default function Admindrug() {
  const [datadrug, setDatadrug] = useState([]);
  const [dataOtherDrug, setDataOtherdrug] = useState([]);
  
  const [selectedDrug, setSelectedDrug] = useState({});
  const [selectedotherDrug, setSelectedotherDrug] = useState({});

  return (
    <div>
          <Header title="Drug setting"  />

      <Stack
        direction="row"
        spacing={2}
        py={10}
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >  <Link href="#" underline="hover">
             <Typography variant="h6">Drug</Typography>
    </Link>

    <Link href="#" underline="hover">
             <Typography variant="h6">Other Drug</Typography>
    </Link>
    <Link href="#" underline="hover">
             <Typography variant="h6">Result</Typography>
    </Link>
    </Stack>
  
    <Grid  container  
      sx={{textAlign: "center"}} spacing={4}
        >
     <Grid item xs={12} > < TextField sx={{  width:400,
        maxWidth: '90%', }} id="outlined-basic" label="Outlined" variant="outlined" /> </Grid> 

     <Grid item xs={12}> <Autocomplete 
              id="Drug"
              options={datadrug}
              getOptionLabel={(option) => option.drugname}
              onChange={(_event, newDrug) => {
                if (newDrug != null) {
                  setSelectedDrug(newDrug);
                }
              }}
              renderInput={(params) => (
                <TextField sx={{  width:400,
                  maxWidth: '90%', }} {...params} label="Enter Drug" variant="outlined" />
              )}
            /> </Grid> 
          </Grid> 
        
    </div>
  );
}
