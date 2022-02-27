import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";

function Header(props) {
  const { title } = props;

  return (
    <React.Fragment>
      <AppBar >
        <Toolbar >
          <Typography 
            component="h4"
            variant="h5"
            color="#fff"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}



export default Header;
