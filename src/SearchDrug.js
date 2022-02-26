import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from "./Header";

export default function SearchDrug() {
  const [drug, setDrug] = useState();
  const [otherDrug, setOtherDrug] = useState();
  const [datadrug, setDatadrug] = useState([]);
  const [dataOtherDrug, setDataOtherdrug] = useState([]);

  const [selectedDrug, setSelectedDrug] = useState({});
  const [selectedotherDrug, setSelectedotherDrug] = useState({});

  useEffect(() => {
    const getDrug = async () => {
      const { data } = await axios.get(`/api/drug/read.php`);

      setDatadrug(data.drug);
    };

    const getOtherDrug = async () => {
      const { data } = await axios.get(`/api/otherdrug/read.php`);

      setDataOtherdrug(data.otherdrug);
    };

    getDrug();
    getOtherDrug();

    // console.log(datadrug)
  }, []);

  console.log(selectedotherDrug);
  console.log(selectedDrug);

  return (
    <>
    <Header title="Drug"  />


    <Box p={4} py={9}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={2}>
          <Grid sx={{ textAlign: "center" }}>
            {" "}
            <Typography variant="h4" component="h1" py={4}>
              Drug Interactions Checker
            </Typography>
            <Autocomplete
              id="Drug"
              options={datadrug}
              getOptionLabel={(option) => option.drugname}
              onChange={(_event, newDrug) => {
                if (newDrug != null) {
                  setSelectedDrug(newDrug);
                }
              }}
              renderInput={(params) => (
                <TextField {...params} label="Enter Drug" variant="outlined" />
              )}
            />
          </Grid>

          <Grid sx={{ textAlign: "center" }}>
            {" "}
            <Typography variant="h4" component="h1">
              +
            </Typography>
            <Autocomplete
              id="Other Drug"
              options={dataOtherDrug}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter Other Drug"
                  variant="outlined"
                />
              )}
              getOptionLabel={(option) => option.otherdrug}
              onChange={(_event, newOtherDrug) => {
                if (newOtherDrug != null) {
                  setSelectedotherDrug(newOtherDrug);
                }
              }}
            />
          </Grid>
          <Grid sx={{ textAlign: "center" }}>
            <Button
              sx={{ width: "100%", height: 60 }}
              variant="contained"
              component={Link}
              to={{
                pathname: "/result/search",
                state: {
                  iddrug: parseInt(selectedDrug["id"]),
                  drug: selectedDrug["drugname"],
                  idotherdrug: parseInt(selectedotherDrug["id"]),
                  otherdrug: selectedotherDrug["otherdrug"],
                },
              }}
            >
              Search
            </Button>
          </Grid>
        </Stack>
      </Grid>
    </Box>
    </>
  );
}
