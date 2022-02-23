import React ,{ useState,useEffect }from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
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
  const [datadrug, setDatadrug] = useState([]);
  const [dataOtherDrug, setDataOtherdrug] = useState([]);
  
  const [selectedDrug, setSelectedDrug] = useState({});
  const [selectedotherDrug, setSelectedotherDrug] = useState({});


  useEffect(() => {
    const getDrug = async () => {
      const { data } = await axios.get(`/drug/api/drug/read.php`);

      setDatadrug(data.drug);
      console.log(JSON.stringify(data.drug));
    };

    const getOtherDrug = async () => {
      const { data } = await axios.get(`/drug/api/otherdrug/read.php`);

      setDataOtherdrug(data.otherdrug);
      console.log(JSON.stringify(data.otherdrug));
    };

    getDrug();
    getOtherDrug();
   
    console.log(datadrug)

  }, []);

console.log(selectedotherDrug);
console.log(selectedDrug);

  return (
    <Box p={4} >    
    
    <Grid container spacing={2}  
  direction="row"
  justifyContent="center"
  alignItems="center">

    <Stack spacing={2} sx={{ width: 500 }} spacing={2}>
     <Grid sx={{textAlign:"center"}} > <Typography  variant="h4" component="h1" py={4}>Drug Interactions Checker
</Typography>
<Autocomplete
      id="Drug"
      options={datadrug}

      renderInput={params => (
        <TextField {...params} label="Drug" variant="outlined" />
      )}
      getOptionLabel={option => option.drugname}
            onChange={(_event, newDrug) => {
        setSelectedDrug(newDrug);
      }}
    />

</Grid>

 
  
      <Grid sx={{textAlign:"center"}}> <Typography  variant="h4" component="h1">+
      </Typography></Grid>
    <Autocomplete
      id="Other Drug"
      options={dataOtherDrug}
      renderInput={params => (
        <TextField {...params} label="Other Drug" variant="outlined" />
      )}
      getOptionLabel={option => option.otherdrug}
      onChange={(_event, newOtherDrug) => {
        setSelectedotherDrug(newOtherDrug);
      }}
    /><Grid sx={{textAlign:"center"}}> 

<Button sx={{ width: 500,height:60 }}  variant="contained"
  component={Link}

  to={{ 
    pathname: "/result/search",
    state: { "iddrug":parseInt(selectedDrug["id"]),"drug":selectedDrug["drugname"],"idotherdrug":parseInt(selectedotherDrug["id"]),"otherdrug":selectedotherDrug["otherdrug"]}
}}
>Search</Button>




</Grid>
    </Stack>
  
          

    </Grid>
    </Box>
  );
}

