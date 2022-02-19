import React ,{ useState,useEffect }from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import axios from "axios";
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function SearchDrug() {
  const [drug, setDrug] = useState();
  const [otherDrug, setOtherDrug] = useState();
  const [datadrug, setDatadrug] = useState();
  const [dataOtherDrug, setDataOtherdrug] = useState();

  useEffect(() => {
    const getDrug = async () => {
      const { data } = await axios.get(`/api/drug`);

      setDatadrug(data.drug);
      console.log(JSON.stringify(data.setDatadrug));
    };

    const getOtherDrug = async () => {
      const { data } = await axios.get(`/api/otherdrug`);

      setDataOtherdrug(data.otherdrug);
      console.log(JSON.stringify(data.otherdrug));
    };

    getDrug();
    getOtherDrug();

  }, []);
  
  return (
    <Box p={4} >    
    
    <Grid container spacing={2}  
  direction="row"
  justifyContent="center"
  alignItems="center">
    <Stack spacing={2} sx={{ width: 500 }} spacing={2}>
     <Grid sx={{textAlign:"center"}} > <Typography  variant="h4" component="h1" py={4}>Drug Interactions Checker
</Typography></Grid>
    <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
          name="drug"

            {...params}
            label="Enter drug"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            onChange={(e) => setDrug(e.target.value)}

          />
        )}
      />  <Grid sx={{textAlign:"center"}}> <Typography  variant="h4" component="h1">+
      </Typography></Grid>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField

          name="otherdrug"

            {...params}
            label="Enter other drug"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}

            onChange={(e) => setOtherDrug(e.target.value)}

          />
        )}
      /> <Grid sx={{textAlign:"center"}}> 

<Button sx={{ width: 500,height:60 }}  variant="contained"
  component={Link}

  to={{
    pathname: "/result/search",
    state: { drug:"zz",id2:"222" }
}}
>Search</Button>




</Grid>
    </Stack>
  
          

    </Grid>
    </Box>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  
];
