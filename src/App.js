import React, { useState } from "react";
import axios from "axios";

function App() {
  const [predictionResult, setPredictionResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const responseDiabetes = await axios.post(
        "http://localhost:5000/predict/diabetes",
        {
          feature1: event.target.feature1.value,
          feature2: event.target.feature2.value,
          // Add more features as needed
        }
      );
      const { prediction: diabetesPrediction } = responseDiabetes.data;

      const responseHousing = await axios.post(
        "http://localhost:5000/predict/housing",
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
          feature10: event.target.feature10.value,
          // Add more features as needed
        }
      );
      const { prediction: housingPrediction } = responseHousing.data;

      const predictions = {
        diabetes: diabetesPrediction,
        housing: housingPrediction,
      };

      setPredictionResult(predictions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>House Price Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="feature1">Longitude:</label>
          <input type="text" id="feature1" name="feature1" />
        </div>
        <div>
          <label htmlFor="feature2">Latitude:</label>
          <input type="text" id="feature2" name="feature2" />
        </div>
        <div>
          <label htmlFor="feature3">
            Median Age of a House within a block:
          </label>
          <input type="text" id="feature3" name="feature3" />
        </div>
        <div>
          <label htmlFor="feature4">
            Total Number of Rooms within a Block:
          </label>
          <input type="text" id="feature4" name="feature4" />
        </div>
        <div>
          <label htmlFor="feature5">
            Total Number of Bedrooms within a Block:
          </label>
          <input type="text" id="feature5" name="feature5" />
        </div>
        <div>
          <label htmlFor="feature6">
            Total Number of people residing within a block:
          </label>
          <input type="text" id="feature6" name="feature6" />
        </div>
        <div>
          <label htmlFor="feature7">Total Number of Households:</label>
          <input type="text" id="feature7" name="feature7" />
        </div>
        <div>
          <label htmlFor="feature8">
            Median Income of Households in a block:
          </label>
          <input type="text" id="feature8" name="feature8" />
        </div>
        <div>
          <label htmlFor="feature9">
            Median House value of Households in a block:
          </label>
          <input type="text" id="feature9" name="feature9" />
        </div>
        <div>
          <label htmlFor="feature10">Ocean Proximity:</label>
          <input type="text" id="feature10" name="feature10" />
        </div>

        {/* Add more input fields for other features */}
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Prediction Results</h2>
        <p>Housing Prediction: {predictionResult.housing}</p>

        <p>Diabetes Prediction: {predictionResult.diabetes}</p>
      </div>
    </div>
  );
}

export default App;
