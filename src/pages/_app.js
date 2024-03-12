import { useEffect } from "react";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html");
    console.log(state.theme + " this is theme state");

    if (state.theme) {
      htmlTag.classlist.add("dark");
    }
  }, [state.theme]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);
