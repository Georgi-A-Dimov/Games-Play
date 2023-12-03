import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import { useNavigate, useParams } from "react-router-dom";

export default function GameEdit() {

    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => setGame(result));
    }, [gameId]);

    const editHandler = async (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.target));
        try {
            await gameService.edit(gameId, gameData);

            navigate('/games');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    };

    const onChange = (e) => {
        setGame((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" onChange={onChange} value={game.title} placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" onChange={onChange} value={game.category} placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" onChange={onChange} value={game.maxLevel} min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" onChange={onChange} value={game.imageUrl} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" onChange={onChange} value={game.summary} id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>
    )
};