import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Components/Assets/Preview.png";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleUpgrade = () => {
    navigate("/billing");
  };
  const handleConsultDoctors = () => {
    navigate("/consult-doctors");
  };
  const handleLabTest = () => {
    navigate("/test-result");
  };
  const handleAppointment = () => {
    navigate("/appointment");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f4f4f4",
        width: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          bgcolor: "#f4f4f4",
          paddingY: 2,
          paddingX: 4,
          zIndex: 1000,
        }}
      >
        <Container maxWidth="lg" sx={{ padding: 0 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Left Section */}
            <img
              src={logo}
              alt="Logo"
              style={{ height: "60px", paddingRight: "690px" }}
            />

            {/* Right Section */}
            <Box display="flex" alignItems="center">
              <Button
                variant="contained"
                sx={{
                  marginRight: 2,
                  bgcolor: "teal",
                  "&:hover": {
                    bgcolor: "#2F4F4F",
                  },
                }}
                onClick={handleUpgrade}
              >
                Upgrade
              </Button>

              <IconButton
                color="primary"
                onClick={handleMenuOpen}
                sx={{ color: "#004d40" }}
              >
                <AccountCircleIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleNavigation("/help-support")}>
                  Help & Support
                </MenuItem>
                <MenuItem onClick={() => handleNavigation("/billing")}>
                  Billing
                </MenuItem>
                <MenuItem onClick={() => handleNavigation("/account-settings")}>
                  Account Settings
                </MenuItem>
                <MenuItem onClick={() => handleNavigation("/sign-in")}>
                  Signout
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box><br/><br />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ paddingY: 1 }}>
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12}>
            <Card sx={{ bgcolor: "teal", height: "60px" }}>
              <CardActionArea onClick={() => navigate("/profile")}>
                <CardContent>
                  <Box display="flex" alignItems="center" height="100%">
                    <Box>
                      <center>
                    
                      <Typography
                        variant="h5"
                        sx={{ color: "white" }}
                        style={{ alignContent: "center" , justifyContent:"center",alignItems:"center"}}
                        >
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        
                        Your Health Profile
                        
                      </Typography>
                        </center>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#d0f0c0" }}>
              <CardActionArea
                component="a"
                href="https://you.com/"
                target="_blank"
                rel="noopener"
              >
                <CardContent>
                  <Box display="flex" alignItems="center">
                    
                    <Box>
                      <Typography variant="h6">
                      &emsp;
                      &emsp;
                        
                        Your Personal AI Doctor
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#f8d7da" }}>
              <CardActionArea onClick={() => navigate("/health-risks")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                   
                    <Box>
                      <Typography variant="h6" color="error">
                    
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                      
                       
                        Health Risks
                      </Typography>
                      
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#d0f0c0" }}>
              <CardActionArea onClick={() => navigate("/supplements")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                   
                    <Box>
                      <Typography variant="h6">
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;Supplements</Typography>
                     
                      
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#FFE4E1" }}>
              <CardActionArea onClick={handleAppointment}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    
                    <Box>
                      <Typography variant="h6">
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;Appointments</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        Book your Appointment
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#fff5e6" }}>
              <CardActionArea onClick={() => navigate("/health-monitoring")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    
                    <Box>
                      <Typography variant="h6">   
                        &emsp;
                        &emsp;
                        &emsp;
                        
                        &emsp;Health Monitoring</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        Track your health metrics
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#e6e6fa" }}>
              <CardActionArea onClick={() => navigate("/personal-tips")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    
                    <Box>
                      <Typography variant="h6">    &emsp;
                        &emsp;
                        &emsp;Personal Health Tips</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        Get personalized tips
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#e0ffff" }}>
              <CardActionArea onClick={() => navigate("/medical-records")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    
                    <Box>
                      <Typography variant="h6">    &emsp;
                        &emsp;
                        &emsp;
                        &emsp;Medical Records
                     
                      </Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        Manage your medical 
                      
                        
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#fffacd" }}>
              <CardActionArea onClick={() => navigate("/emergency-assistance")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    
                    <Box>
                      <Typography variant="h6">
                      &emsp;
                        &emsp;
                        &emsp;Emergency Assistance</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        Get immediate help
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#d3d3d3" }}>
              <CardActionArea onClick={() => navigate("/mental-health")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                   
                    <Box>
                      <Typography variant="h6">
                      &emsp;
                        &emsp;
                        &emsp;
                        Mental Health Reports
                      </Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        View mental health insights
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#f5f5f5" }}>
              <CardActionArea onClick={() => navigate("/lifestyle-tracking")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                   
                    <Box>
                      <Typography variant="h6">
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;Lifestyle Tracking</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        Track your daily habits
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#faebd7" }}>
              <CardActionArea onClick={() => navigate("/hospitals")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    
                    <Box>
                      <Typography variant="h6">
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;Nearby Hospitals</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        Find hospitals near you
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#ffebcd" }}>
              <CardActionArea onClick={() => navigate("/supplement-delivery")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
              
                    <Box>
                      <Typography variant="h6">
                      &emsp;
                        &emsp;
                        &emsp;Supplement Delivery</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                      &emsp;
                        &emsp;
                        &emsp;
                        &emsp;
                        Get supplements delivered
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
