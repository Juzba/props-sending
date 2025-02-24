import protypes from 'prop-types';

const Book = ({ image, title, price }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt='' />
            <p>{price}</p>
        </div>
    );
};

Book.propTypes = {
    image: protypes.string.isRequired,
    title: protypes.string.isRequired,
    price: protypes.number.isRequired,
};

Book.defaultProps = {
    image: 'https://via.placeholder.com/150',
    title: 'No title',
    price: 0,
};

export default Book;
