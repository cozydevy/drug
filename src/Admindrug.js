import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Header from "./Header";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import axios from "axios";
export default function Admindrug() {
  const [datadrug, setDatadrug] = useState([]);
  const [drugname, setNewDrug] = useState("");
  const [editDrugname, seteditDrugname] = useState("");

  const [selectedDrug, setSelectedDrug] = useState({});
  const [statusDrug, setStatusDrug] = useState();

  useEffect(() => {
    const getDrug = async () => {
      const { data } = await axios.get(`/api/drug/read.php`);

      setDatadrug(data.drug);
    };

    getDrug();

    // console.log(datadrug)
  }, [statusDrug]);

  const addDrug = async (e) => {
    e.preventDefault();
    const bodyParameters = JSON.stringify({
      drugname: drugname,
    });
    console.log(bodyParameters);
    await axios
      .post("/api/drug/create.php", bodyParameters)
      .then((response) => {
        console.log(response);

        // window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.status); // 401
        console.log(error.response.data.error);
      });
  };
  const updateDrug = async (e) => {
    e.preventDefault();
    const bodyParameters = JSON.stringify({
      id: selectedDrug.id,
      drugname: editDrugname,
    });
    console.log(bodyParameters);
    await axios
      .post("/api/drug/update.php", bodyParameters)
      .then((response) => {
        console.log(response);

        // window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.status); // 401
        console.log(error.response.data.error);
      });
  };

  console.log(editDrugname);

  return (
    <div>
      <Header title="Drug setting" />

      <Stack
        direction="row"
        spacing={2}
      paddingTop={10}
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Link href="#" underline="hover">
          <Typography variant="h6">Drug</Typography>
        </Link>
        <Link href="#" underline="hover">
          <Typography variant="h6">Other Drug</Typography>
        </Link>
        <Link href="#" underline="hover">
          <Typography variant="h6">Result</Typography>
        </Link>
      </Stack>

      <Grid container  sx={{ textAlign: "center" }} py={2} spacing={2}>
      <Grid item xs={12} >    <Typography variant="h5">Add new drug</Typography>  </Grid>
        <Grid item xs={12} >
          <TextField
            sx={{ width: 400, maxWidth: "100%" }}
            id="drug"
            label="Enter Drug name"
            variant="outlined"
            onChange={(e) => setNewDrug(e.target.value)}
          />
          <Button
            sx={{ height: 60 ,margin:2}}
            variant="contained"
            onClick={addDrug}
          >
            Add Drug
          </Button>
        </Grid>
        </Grid>

        <Grid container sx={{ textAlign: "center" }} spacing={2} p={2}>
        <Grid item xs={12} >    <Typography variant="h5">Edite or delete Drug</Typography>  </Grid>

          <Grid item xs={12}>
            <Autocomplete
              id="Drugall"
              options={datadrug}
              getOptionLabel={(option) => option.drugname}
              onChange={(_event, newDrug) => {
                if (newDrug != null) {
                  setSelectedDrug(newDrug);
                  seteditDrugname(newDrug.drugname);
                }
              }}
              renderInput={(params) => (
                <TextField
                  sx={{ width: 400, maxWidth: "90%" }}
                  {...params}
                  label="Select Drug"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: 400, maxWidth: "90%" }}
              id="updatedrug"
              variant="outlined"
              value={editDrugname}
              onChange={(e) => seteditDrugname(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sx={{ textAlign: "center" }} spacing={2}>
            <Button
              sx={{ height: 60, margin: 2 }}
              variant="contained"
              onClick={updateDrug}
            >
              Edite Drug
            </Button>

            <Button
              sx={{ height: 60 }}
              variant="contained"
              onClick={updateDrug}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
    </div>
  );
}
