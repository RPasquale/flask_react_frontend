import React, { useState } from 'react';
import axios from 'axios';

function DiabetesPredictionPage() {
  const [predictionResult, setPredictionResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make the POST request to the backend endpoint for diabetes prediction
      const response = await axios.post(
        "http://localhost:5000/predict/diabetes",
        {
          feature1: event.target.feature1.value,
          feature2: event.target.feature2.value,
          feature3: event.target.feature3.value,
          feature4: event.target.feature4.value,
          feature5: event.target.feature5.value,
          feature6: event.target.feature6.value,
          feature7: event.target.feature7.value,
          feature8: event.target.feature8.value,
          feature9: event.target.feature9.value,
          feature10: event.target.feature10.value
          // ...rest of the feature values
        }
      );

      console.log('Response:', response.data);

      // Handle the response and update the prediction result
      const { prediction } = response.data;
      console.log('Prediction:', prediction);
      setPredictionResult(prediction);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Diabetes Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="feature1">Age:</label>
          <input type="number" id="feature1" name="feature1" />
        </div>
        <div>
          <label htmlFor="feature2">Sex:</label>
          <input type="number" id="feature2" name="feature2" />
        </div>
        <div>
          <label htmlFor="feature3">Body Mass Index (BMI):</label>
          <input type="number" id="feature3" name="feature3" />
        </div>
        <div>
          <label htmlFor="feature4">Average Blood Pressure:</label>
          <input type="number" id="feature4" name="feature4" />
        </div>
        <div>
          <label htmlFor="feature5">Total Serum Cholesterol:</label>
          <input type="number" id="feature5" name="feature5" />
        </div>
        <div>
          <label htmlFor="feature6">Low Density Lipoproteins:</label>
          <input type="number" id="feature6" name="feature6" />
        </div>
        <div>
          <label htmlFor="feature7">High Density Lipoproteins:</label>
          <input type="number" id="feature7" name="feature7" />
        </div>
        <div>
          <label htmlFor="feature8">Total Cholesterol / HDL:</label>
          <input type="number" id="feature8" name="feature8" />
        </div>
        <div>
          <label htmlFor="feature9">Log of Serum Triglicerydes Level:</label>
          <input type="number" id="feature9" name="feature9" />
        </div>
        <div>
          <label htmlFor="feature10">Blood Sugar Level:</label>
          <input type="number" id="feature10" name="feature10" />
        </div>
        {/* Add more input fields for other features */}
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Prediction Results</h2>
        {predictionResult && (
          <>
            <p>Linear Regression: {predictionResult['Linear Regression']}</p>
            <p>Ridge Regression: {predictionResult['Ridge Regression']}</p>
            <p>Lasso Regression: {predictionResult['Lasso Regression']}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default DiabetesPredictionPage;
