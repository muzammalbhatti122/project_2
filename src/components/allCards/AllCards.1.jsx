import { useSelector } from 'react-redux';
import "../allCards/allCards.css"
import { Link } from 'react-router-dom';



export function AllCards() {

    let myCards = useSelector(function (store) {
        return store.adAllCards;

    });



    return <div>
        <div id="allCards-container">
            {myCards.map(function (a) {

                return <div id='meramainCard'>
                        <Link to={'/detail/'+a.id}>
                        <div id="allCards">
                            <img src={a.pic} alt="" />
                        </div>
                        <h5>{a.name}</h5>
                        <h6 id='allCardsPrice'>RS....  {a.price}</h6>
                </Link>
                    </div>;
            })}

        </div>
    </div>;
}
