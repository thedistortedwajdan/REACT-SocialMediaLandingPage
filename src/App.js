import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Navbar />
        <Feed />
        <Rightbar />
        <Sidebar />
      </Box>
    </>
  );
}

export default App;
