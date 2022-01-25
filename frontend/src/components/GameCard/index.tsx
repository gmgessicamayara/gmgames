import GameScore from "components/GameScore";
import { Link } from "react-router-dom";
import { Game } from "types/game";


type Props = {
    game: Game;
}

function GameCard( {game} : Props ) {

    

    return(
        <div>
            <img className="gmgames-movie-card-image" src={game.image} alt={game.title} />
            <div className="gmgames-card-bottom-container">
             <h3>{game.title}</h3>
                <GameScore count={game.count} score={game.score} />
        <Link to={`/Form/${game.id}`}>
        <div className="btn btn-primary gmgames-btn">Avaliar</div>
        </Link>
        
    </div>
</div>);
}

export default GameCard;