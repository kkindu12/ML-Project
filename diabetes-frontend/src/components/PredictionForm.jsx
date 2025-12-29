import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { predictDiabetes } from "../services/api";

const PredictionForm = ({ setResult }) => {
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

  const handleSubmit = async () => {
    try {
      const response = await predictDiabetes(formData);
      setResult(response.data.result);
    } catch (error) {
      alert("Backend connection failed");
    }
  };

  return (
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
  );
};

export default PredictionForm;
