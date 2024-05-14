import "./ModelStats.css";

const ModelStats = () => {
	return (
		<div className="model-stats">
			<h2>Model Statistics</h2>
			<p>
				The model used in this application is a RandomForestClassifier, which is
				a type of ensemble learning method for classification tasks.
			</p>
			<table>
				<thead>
					<tr>
						<th>Metric</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Precision</td>
						<td>0.85</td>
					</tr>
					<tr>
						<td>Recall</td>
						<td>0.82</td>
					</tr>
					<tr>
						<td>F1 Score</td>
						<td>0.83</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ModelStats;
