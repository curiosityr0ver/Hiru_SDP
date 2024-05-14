import React, { useEffect, useState } from "react";
import "./ProbabilityBar.css";

const ProbabilityBar = ({ probability }) => {
	const [fillWidth, setFillWidth] = useState(0);
	const [fillColor, setFillColor] = useState("");

	useEffect(() => {
		const newFillWidth = probability * 100;
		setFillWidth(newFillWidth);

		// Calculate color based on probability
		if (probability >= 0.8) {
			setFillColor("#508D69"); // Yellow
		} else if (probability >= 0.6) {
			setFillColor("#A6CF98"); // Default blue
		} else if (probability >= 0.4) {
			setFillColor("#FF6D60"); // Dark red
		} else {
			setFillColor("#DF2E38"); // Dark green
		}
	}, [probability]);

	return (
		<div className="probability-bar-widget">
			<div className="probability-bar">
				<div
					className="probability-fill"
					style={{ width: `${fillWidth}%`, backgroundColor: fillColor }}
				/>
			</div>
		</div>
	);
};

export default ProbabilityBar;
