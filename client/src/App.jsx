import { useState } from "react";
import axios from "axios";
import "./App.css";
import ProbabilityBar from "./probabilityBar/ProbabilityBar";
import ReviewTabs from "./reviews/ReviewTabs";
import ModelStats from "./modelStats/ModelStats";

function App() {
	const [review, setReview] = useState("");
	const [result, setResult] = useState("");

	const handleChange = (e) => {
		setReview(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:8000/predict2", {
				text: review,
			});
			console.log("response.data:", response.data.probability_fake);
			setResult(response.data.probability_fake);
		} catch (error) {
			console.error("Error submitting review:", error);
		}
	};
	const handleSelectReview = (selectedReview) => {
		setReview(selectedReview);
	};

	return (
		<div className="App">
			<div className="left">
				<h1>Fake Review Detector</h1>
				<form onSubmit={handleSubmit}>
					<textarea
						value={review}
						onChange={handleChange}
						placeholder="Write your review here..."
						rows={6}
						cols={50}
					/>
					<br />
					<button type="submit">Submit Review</button>
				</form>
				{result && result !== null && (
					<div className="result">
						<ProbabilityBar probability={result} />
						<p>{`Probability of review being genuine: ${(result * 100).toFixed(
							2
						)}%`}</p>
					</div>
				)}
			</div>
			<div className="right">
				<ReviewTabs onSelectReview={handleSelectReview} />
				<ModelStats />
			</div>
		</div>
	);
}

export default App;
