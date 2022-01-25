import {ReactComponent as Arrow} from 'assets/img/arrow.svg'
import { GamePage } from 'types/game';
import './styles.css';

type Props = {
    page: GamePage;
    onChange: Function;
}

function Pagination({ page, onChange } : Props) {
    return (
        <div className="gmgames-pagination-container">
         <div className="gmgames-pagination-box">
             <button className="gmgames-pagination-button" disabled={page.first} 
             onClick={() => onChange(page.number - 1) }>
                 <Arrow />
             </button>
             <p>{`${page.number + 1} de ${page.totalPages}`}</p>
             <button className="gmgames-pagination-button" disabled={page.last} 
              onClick={() => onChange(page.number + 1) }>
                 <Arrow className="gmgames-flip-horizontal" />
             </button>
         </div>
        </div>
    );
}

export default Pagination;  