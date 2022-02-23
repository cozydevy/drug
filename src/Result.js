import React ,{ useState,useEffect }from 'react';
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import axios from "axios";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function Result() {
  const location = useLocation();
  const iddrug =location.state.iddrug;
  const idotherdrug =location.state.idotherdrug;
  const drug =location.state.drug;
  const otherdrug =location.state.otherdrug;

  const [dataInteract, setDataInteract] = useState([]);
  const bodyParameters = JSON.stringify({
    "iddrug": iddrug,
    "idotherdrug": idotherdrug
  });
  
  // console.log(bodyParameters);

  useEffect(() => {
    // const getInteract = async () => {
    //   const { data } = await axios.post(`/drug/api/interact/read_one.php`);

    //   setDataInteract(data.interact);
    //   console.log(JSON.stringify(data.interact));
    // };

    const getInteract = async (e) => {
      // e.preventDefault();
    await axios
      .post("/drug/api/interact/read_one.php", bodyParameters)
      .then((response) => {
        setDataInteract(response.data.interact);
        console.log(response.data);
  
      })
      .catch((error) => {
        console.log(error.response.status); // 401
        console.log(error.response.data.status);
      });
  };
  getInteract();

}, []);

console.log("xxx"+JSON.stringify(dataInteract));
console.log(typeof(dataInteract));
const resultList = (dataInteract || []).map((item, i) => (
   <Grid >
   <Grid item xs={12}   py={2}><Chip label="summary" variant="outlined" /></Grid>
   <Grid item xs={12} key={i} >    <Typography   variant="h6" component="h6" p={1}>{item.summary} </Typography>  </Grid>
   <Grid item xs={12}  py={2} ><Chip label="severity" variant="outlined" /></Grid>

   <Grid item xs={12} key={i}>    <Typography   variant="h6" component="h6" p={1}>{item.severity} </Typography> </Grid>   
   <Grid item xs={12}  py={2}><Chip label="documentation" variant="outlined" /></Grid>
   <Grid item xs={12} key={i}>    <Typography   variant="h6" component="h6" p={1}>{item.documentation} </Typography> </Grid>   

   <Grid item xs={12} py={2}><Chip label="clarification" variant="outlined" /> </Grid> 
   <Grid item xs={12} key={i} >    <Typography   variant="h6" component="h6" p={1}>{item.clarification} </Typography> </Grid>   

   <Grid item xs={12}  py={2}><Chip label="reference" variant="outlined" /></Grid>
   <Grid item xs={12} key={i}>    <Typography   variant="h6" component="h6" p={1}>{item.reference} </Typography> </Grid>   


   </Grid> ));

  return (
    <div>
    <Grid   spacing={2}  

 
 >      <Typography sx={{textAlign:"center"}} variant="h4" component="h1" py={2}>Drug Interaction Report </Typography>  
      <Typography  variant="h6" component="h6" py={1}>This report displays the potential drug interactions for the following 2 drugs:</Typography>
      <Typography  variant="h5" component="h5" p={2}><ArrowRightIcon></ArrowRightIcon>{drug} </Typography> 
      <Typography  variant="h5" component="h5" p={2}><ArrowRightIcon></ArrowRightIcon>{otherdrug} </Typography>  

      <Stack direction="column" spacing={1} py={3}>
      

     {resultList}
    
      </Stack>
      </Grid>

    </div>
  )
}
