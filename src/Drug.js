import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Content from "./Content";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Header from "./Header";

import Footer from "./Footer";

const sections = [
  { title: "Search Drug", url: "#" },
  { title: "Manage Drug", url: "#" },
];

const theme = createTheme();

export default function Drug() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">

        <Content></Content>
      </Container>
      {/* <Footer 
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
    </ThemeProvider>
  );
}
