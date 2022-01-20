import axios from "axios";
import GameCard from "components/GameCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { GamePage } from "types/game";
import { BASE_URL } from "utils/requests";

function Listing() {
    
    const [PageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/games?size=12$page=1`)
        .then(response => {
            const data = response.data as GamePage;
            console.log(data);
            setPageNumber(data.number);
        });
    }, []);

    return (
    <>
    <p>{PageNumber}</p>
      <Pagination/>
      <div className="container">
        <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard/>
            </div>

        </div>
        </div>
    </>
    );
}

export default Listing;