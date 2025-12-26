from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)   # allow React to connect

# Load saved ML model
model = pickle.load(open("diabetes_model.sav", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    input_data = np.array([[
        data["Pregnancies"],
        data["Glucose"],
        data["BloodPressure"],
        data["SkinThickness"],
        data["Insulin"],
        data["BMI"],
        data["DiabetesPedigreeFunction"],
        data["Age"]
    ]])

    prediction = model.predict(input_data)

    result = "Diabetic" if prediction[0] == 1 else "Non-Diabetic"

    return jsonify({ "result": result })

if __name__ == "__main__":
    app.run(debug=True)
