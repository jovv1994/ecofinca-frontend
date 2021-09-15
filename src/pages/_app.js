import "../../styles/globals.css";
import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider as StyledProvider } from "styled-components";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>EcoFinca</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <StyledProvider theme={theme}>
            <Header />

            <CssBaseline />
            <Component {...pageProps} />
            <Footer />
          </StyledProvider>
        </StylesProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
