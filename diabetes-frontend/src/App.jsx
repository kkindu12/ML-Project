import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Card, CardContent } from "@mui/material";

const App = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Simple test - just show a result without API call
    setResult("Test Result: Non-Diabetic");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Diabetes Prediction System
      </Typography>

      <Box sx={{ display: "grid", gap: 2 }}>
        {Object.keys(formData).map((key) => (
          <TextField
            key={key}
            label={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            fullWidth
            required
          />
        ))}

        <Button variant="contained" size="large" onClick={handleSubmit}>
          Predict
        </Button>
      </Box>

      {result && (
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">
              Prediction Result
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: result === "Diabetic" ? "#f44336" : "#4caf50"
              }}
            >
              {result}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default App;

