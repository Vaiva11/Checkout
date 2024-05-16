import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/Theme";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
}
