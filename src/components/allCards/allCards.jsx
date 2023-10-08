

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import '../allCards/allCard.css'


export function AllCards(){

    let myCards = useSelector(function(store){
        return store.adAllCards;

    })


    let param = useParams();

    alert(param.nID)

    return <div>
        <div id="allCards-container">
        {
                myCards.map(function (a) {
                    return <div>
                        
                        <div id="allCards">
                            <img src={a.pic} alt="" />
                        </div>
                        <h5>{a.name}</h5>
                        <h6 id='allCardsPrice'>RS....  {a.price}</h6> 
                        <Link to={'/product/'+a.id}>Add To Cart</Link>
                    </div>
                })
            }
        </div>
    </div>
}