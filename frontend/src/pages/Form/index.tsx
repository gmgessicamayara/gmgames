import { Link } from 'react-router-dom';
import './styles.css';

function Form() {

        const game = {
        id: 1,
        image: "https://images.tcdn.com.br/img/img_prod/804441/jogo_shadow_of_the_tomb_raider_a_definitive_edition_ps4_2099_1_d3e497993d8a3688141d1438ecd6431d.jpg",
        title: "Lara Croft",
        count: 2,
        score: 4.5
    };

    return (
        <div className="gmgames-form-container">
        <img className="gmgames-games-card-image" src={game.image} alt={game.title} />
        <div className="gmgames-card-bottom-container">
        <h3>"The Witcher"</h3>
        <form className="gmgames-form">
            <div className="form-group gmgames-form-group">
                <label htmlFor="email">Informe seu email</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group gmgames-form-group">
                <label htmlFor="score">Informe sua avaliação</label>
                <select className="form-control" id="score">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="gmgames-form-btn-container">
                <button type="submit" className="btn btn-primary gmgames-btn">Salvar</button>
            </div>
        </form >
        <Link to="/">
        <button className="btn btn-primary gmgames-btn mt-3">Cancelar</button>
        </Link>
        </div >
        </div >
    );
}

export default Form;