import data from '../data';
import Book from './Book';

const Books = () => {
    return (
        <div>
            {data.map((oneBook) => {
                return <Book key={oneBook.id} {...oneBook} />;
            })}
        </div>
    );
};

export default Books;
