import { Box } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";

export default function DashboardPage() {
  return (
    <Box>
      <SidebarComponent />
      <Box sx={{ display:"flex",flexDirection:"column", ml:20}}>
        <SearchComponent />
      
      <Box
        sx={{
          bgcolor: "#f4f4f4",
          width:"100%",
          height: "auto",
          minHeight: "600px",
          display: "flex",
          flexDirection: "column",
        }}
      >
    <Box sx={{display:"flex", width:"100%"}}>
        <Box sx={{display:"flex", flexDirection:"column", gap:2, width:"25%" ,height:"auto"}}>the past tickets will show here</Box>
    <Box sx={{display:"flex", width:"75%", heigth:"auto"}}></Box>
    </Box>    
      </Box>
      </Box>
    </Box>
  );
}
