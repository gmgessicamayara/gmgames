import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Game } from 'types/game';
import { BASE_URL } from 'utils/requests';
import { validateEmail } from 'utils/validate';
import './styles.css';

type Props = {
    gameId : string;
}
function FormCard({ gameId } : Props){

    const navigate = useNavigate();
               
    const [game, setGame] = useState<Game>();

    useEffect(() => {
        axios.get(`${BASE_URL}/games/${gameId}`).then(
            response => {
                setGame(response.data);
            }
        );
    }, [gameId]);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const email = (event.target as any).email.value;
          const score = (event.target as any).score.value;  

          if(!validateEmail(email)) {
            return;
          }

          const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: gameId,
                score: score
            }
        }
        axios(config).then(response => {
            navigate("/");
        });

    }

    return (
        <div className="gmgames-form-container">
        <img className="gmgames-games-card-image" src={game?.image} alt={game?.title} />
        <div className="gmgames-card-bottom-container">
        <h3>{game?.title}</h3>
        <form className="gmgames-form" onSubmit={handleSubmit}>
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

export default FormCard;