import React ,{ useState,useEffect }from 'react';
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import axios from "axios";

export default function Result() {
  const location = useLocation();
  const iddrug =location.state.iddrug;
  const idotherdrug =location.state.idotherdrug;
  const [dataInteract, setDataInteract] = useState([]);
  const bodyParameters = JSON.stringify({
    "iddrug": iddrug,
    "idotherdrug": idotherdrug
  });
  
  console.log(bodyParameters);

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
        setDataInteract(response.data);
        console.log(response.data);
  
      })
      .catch((error) => {
        console.log(error.response.status); // 401
        console.log(error.response.data.status);
      });
  };
  getInteract();
  
}, []);
  return (
    <div>
      <Grid sx={{textAlign:"center"}}> <Typography  variant="h4" component="h1">Drug Interaction Report </Typography></Grid>

    </div>
  )
}
