from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware 
from pydantic import BaseModel
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
import joblib

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this to restrict origins if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load the trained TF-IDF vectorizer and Logistic Regression model
tfidf_vectorizer = joblib.load('../model/tfidf_vectorizer.pkl')
model = joblib.load('../model/logistic_regression_model.pkl')
tfidf_vectorizer2 = joblib.load('../model/vector2.pkl')
model2 = joblib.load('../model/model2.pkl')

class Review(BaseModel):
    text: str

@app.post("/predict")
async def predict(review: Review):
    # Preprocess the review text
    text_vector = tfidf_vectorizer.transform([review.text])
    # Predict using the model
    prediction = model.predict(text_vector)[0]
    return {"prediction": prediction}


class ReviewInput(BaseModel):
    text: str

@app.post("/predict2")
def predict_fake_review(review: ReviewInput):
    # Extract features using TF-IDF vectorizer
    review_tfidf = tfidf_vectorizer2.transform([review.text])

    # Predict probability of being fake
    probability_fake = model2.predict_proba(review_tfidf)[:,1][0]

    return {"probability_fake": probability_fake}


@app.get("/")
def read_root():
    return {"status": "Server is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
