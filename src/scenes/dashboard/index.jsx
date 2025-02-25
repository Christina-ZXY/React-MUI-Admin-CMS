import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header"
const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" >
        <Header title="DASHBOARD" subtitle="Welcome2" />
      </Box>
    </Box>
  )
}
export default Dashboard;