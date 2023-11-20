import { Link } from "react-router-dom";

const GameListItem = ({
    title,
    category,
    imageUrl,
}) => {
    return (
        <div class="allGames">
            <div className="allGames-info">
                <img src={imageUrl} alt={title} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to="/details" className="details-button">Details</Link>
            </div>
        </div>
    );
};

export default GameListItem;