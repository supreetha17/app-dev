import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea, Divider } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './HealthRiskPage.css';

const data = [
  { name: 'Jan', risk: 30 },
  { name: 'Feb', risk: 20 },
  { name: 'Mar', risk: 27 },
  { name: 'Apr', risk: 35 },
  { name: 'May', risk: 50 },
  { name: 'Jun', risk: 40 },
  { name: 'Jul', risk: 45 },
  { name: 'Aug', risk: 60 },
  { name: 'Sep', risk: 55 },
  { name: 'Oct', risk: 70 },
  { name: 'Nov', risk: 65 },
  { name: 'Dec', risk: 80 },
];

const HealthRiskPage = () => {
  return (
    <Box className="health-risk-page">
      <Container>
        <Typography variant="h4" className="page-title">
          Health Risks Overview
        </Typography><br />
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className="graphic-card">
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" className="card-title">Monthly Health Risk Trend</Typography>
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="risk" stroke="#8884d8" />
                  </LineChart>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="graphic-card">
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" className="card-title">Risk Factors Breakdown</Typography>
                  <img
                    src="https://arogyaworld.org/wp-content/uploads/2018/11/Pie-Chart.png"
                    alt="Risk Factors"
                    className="chart-image"
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Box className="risk-categories">
          <Typography variant="h5" className="section-title">Risk Categories</Typography><br />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card className="category-card">
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" className="card-title">Cardiovascular Risks</Typography>
                    <Divider />
                    <Typography variant="body2" className="card-description">
                      Details about cardiovascular risks, including statistics and preventive measures.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className="category-card">
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" className="card-title">Diabetes Risks</Typography>
                    <Divider />
                    <Typography variant="body2" className="card-description">
                      Information on diabetes risks, prevalence, and lifestyle changes.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className="category-card">
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" className="card-title">Cancer Risks</Typography>
                    <Divider />
                    <Typography variant="body2" className="card-description">
                      Overview of cancer risks, common types, and screening recommendations.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HealthRiskPage;
