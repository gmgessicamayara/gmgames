import {ReactComponent as Arrow} from 'assets/img/arrow.svg'
import './styles.css';

function Pagination() {
    return (
        <div className="gmgames-pagination-container">
         <div className="gmgames-pagination-box">
             <button className="gmgames-pagination-button" disabled={true} >
                 <Arrow />
             </button>
             <p>{`${1} de ${3}`}</p>
             <button className="gmgames-pagination-button" disabled={false} >
                 <Arrow className="gmgames-flip-horizontal" />
             </button>
         </div>
        </div>
    );
}

export default Pagination;  