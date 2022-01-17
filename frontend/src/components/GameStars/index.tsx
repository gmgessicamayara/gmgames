import { ReactComponent as StarFull } from 'assets/img/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg';

function GameStars() {
    return (
        <div className="gmgames-stars-container">
         <StarFull />
         <StarFull />
         <StarFull />
         <StarHalf />
         <StarEmpty />
</div>)

}
export default GameStars;