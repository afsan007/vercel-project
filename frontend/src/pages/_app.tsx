import React from "react";
import App from "next/app";
import Head from "next/head";
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from "@material-ui/styles";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import muiTheme from "$components/theme/muiTheme";
import "typeface-roboto";
import "$components/layout/global.css";
import "@iin/typeface-iran-sans";
import "@iin/typeface-iran";
import "@iin/typeface-iran-kharazmi";
import "@iin/typeface-iran-rounded";
import "@iin/typeface-iran-sharp";
import "@iin/typeface-iran-yekan";
import { AuthProvider } from '../components/auth/context/AuthContext';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <body dir="rtl">
          <Head>
            <title>Educational Package</title>
          </Head>

          <StylesProvider injectFirst>
            <MuiThemeProvider theme={muiTheme}>
              <SCThemeProvider theme={muiTheme}>
                <CssBaseline />
                <AuthProvider>                
                  <Component {...pageProps} />
                </AuthProvider>
              </SCThemeProvider>
            </MuiThemeProvider>
          </StylesProvider>
        </body>
      </>
    );
  }
}
