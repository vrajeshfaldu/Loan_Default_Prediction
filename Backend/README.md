# Loan Default Prediction System

An AI-powered web application that predicts the probability of loan default using machine learning.

The system allows users to enter applicant information such as income, credit score, loan amount, employment details, debt-to-income ratio, loan purpose, and other financial attributes. The trained machine learning model processes the information and provides a loan default prediction along with risk percentage, confidence score, and important feature drivers.

## Features

- Loan default prediction using Machine Learning
- Risk percentage calculation
- Prediction confidence score
- Feature importance / risk drivers
- Batch prediction support
- REST API built with Flask
- React-based frontend
- CORS-enabled backend
- Serialized ML model using Joblib
- Production deployment using Render and Vercel

## Tech Stack

### Frontend
- React
- JavaScript
- HTML
- CSS

### Backend
- Python
- Flask
- Flask-CORS
- Gunicorn

### Machine Learning
- Scikit-learn
- NumPy
- Pandas
- Joblib

## API Endpoints

### Health Check

`GET /api/health`

Checks whether the backend is running.

### Single Prediction

`POST /api/predict`

Accepts applicant information and returns:

- Prediction
- Risk percentage
- Confidence
- Feature drivers

### Batch Prediction

`POST /api/predict-batch`

Accepts multiple applicant records and returns predictions for each record.

## Deployment

- Frontend: Vercel
- Backend: Render
- Source Code: GitHub
