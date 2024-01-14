import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Navbar />
        <Sidebar />
      </Box>
    </>
  );
}

export default App;
