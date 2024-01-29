import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
}

export default App;
