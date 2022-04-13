import { Typography } from "@mui/material";
import "./App.css";
import MuiButtonGroup from "./components/MuiButtonGroup";
// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      <Typography variant="h3" align="center">
        Learn React Material ui
      </Typography>
      {/* <MuiTypography /> */}
      {/* <MuiButton/>   */}
      <MuiButtonGroup/>
    </div>
  );
}

export default App;
