import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import { QuestionMark as QuestionMarkIcon } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/lab";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import { AppBar, Tab, Tabs, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Link from "@src/components/common/Link";
import "@src/styles/globals.css";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFF",
    },
  },
  components: {
    MuiTabs: {
      defaultProps: {
        textColor: "inherit",
        indicatorColor: "secondary",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <title>NextJS Mui Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="w-full h-full flex">
            <AppBar className="flex flex-row justify-between items-center px-1.5">
              <Link className="text-white hover:no-underline" href="/">
                LOGO
              </Link>
              <Tabs value={pathname}>
                <Tab LinkComponent={Link} label="Tab1" value="/" href="/" />
                <Tab LinkComponent={Link} label="Tab2" value="/tab2" href="/tab2" />
              </Tabs>
              <Link href="https://google.com" target="_blank">
                <IconButton className="text-white">
                  <QuestionMarkIcon />
                </IconButton>
              </Link>
            </AppBar>
            <div className="w-full mt-6">
              <Component {...pageProps} />
            </div>
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
