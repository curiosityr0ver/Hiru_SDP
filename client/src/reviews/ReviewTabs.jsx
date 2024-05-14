import "./ReviewTabs.css";

const defaultReviews = [
	"This product is absolutely fantastic! I'm so impressed with the quality and the customer service. It exceeded all my expectations and I highly recommend it to everyone.",
	"I have to say, I'm quite disappointed with this product. The quality is poor and it doesn't work as advertised. I wouldn't recommend it to anyone.",
	"Wow! What an amazing experience. The service was exceptional and the product exceeded my expectations. I will definitely be purchasing from here again.",
	"I'm sorry to say that this product is not worth the price. It's cheaply made and falls apart easily. Save your money and look elsewhere.",
	"I can't say enough good things about this product. It's truly outstanding and has made my life so much easier. I highly recommend it to everyone.",
	"I had a terrible experience with this product. It arrived damaged and the customer service was non-existent. Avoid at all costs.",
];

import PropTypes from "prop-types";

const ReviewTabs = ({ onSelectReview }) => {
	const handleTabClick = (review) => {
		onSelectReview(review);
	};

	return (
		<div className="review-tabs">
			{defaultReviews.map((review, index) => (
				<div
					key={index}
					className="review-tab"
					onClick={() => handleTabClick(review)}
				>
					{review}
				</div>
			))}
		</div>
	);
};

ReviewTabs.propTypes = {
	onSelectReview: PropTypes.func.isRequired,
};

export default ReviewTabs;
