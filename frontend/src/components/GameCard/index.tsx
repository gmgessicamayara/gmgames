import GameScore from "components/GameScore";

function GameCard () {

    const game = {
        id: 1,
        image: "https://images.tcdn.com.br/img/img_prod/804441/jogo_shadow_of_the_tomb_raider_a_definitive_edition_ps4_2099_1_d3e497993d8a3688141d1438ecd6431d.jpg",
        title: "Tomb Raider",
        count: 2,
        score: 4.5
    };

    return(
        <div>
            <img className="gmgames-movie-card-image" src={game.image} alt={game.title} />
            <div className="gmgames-card-bottom-container">
             <h3>{game.title}</h3>
                <GameScore />
        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
    </div>
</div>);
}

export default GameCard;