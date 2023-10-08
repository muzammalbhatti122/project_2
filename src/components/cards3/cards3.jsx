import { useSelector } from "react-redux"

import './cards3.css'

export function Cards3() {
    let myCards = useSelector(function (store) {
        return store.adCards3;
    })
    return <div>
        <div id="card-container">
            {
                myCards.map(function (a) {
                    return <div>
                        
                        <div id="card3">
                            <img src={a.pic} alt="" />
                        </div>
                        <h5>{a.modle}</h5>
                        <h6>RS....  {a.price}</h6>
                    </div>
                })
            }
        </div>
    </div>
}