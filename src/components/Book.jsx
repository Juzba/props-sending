import PropTypes from "prop-types";
import img from "../assets/react.svg";

const Book = ({ image, title, price }) => {
	return (
		<div>
			<h2>{title || "Defaultní název"}</h2>
			<img src={image || img} alt="" />
			<p>{price || 1000}</p>
		</div>
	);
};

Book.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

// Book.defaultProps = {
// 	image: img,
// 	title: "No title",
// 	price: 1000,
// };

export default Book;
