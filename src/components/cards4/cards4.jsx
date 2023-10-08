
import { useSelector } from 'react-redux'
import './cards4.css'


export function Cards4() {

    let meryCards = useSelector(function (store) {
        return store.adCards4
    })

    return <div>
        <div>
            <div id='main-cards'>

                {

                    meryCards.map(function (s) {

                        return <div className="card" style={{ width: "18rem" }}>

                            <img src={s.pic} className="card-img-top" alt="..." />

                            <div className="card-body">

                                <h5 id='card-text' className="card-text">

                                    {s.module}

                                </h5>

                            </div>
                        </div>

                    })


                }
            </div>

        </div>


    </div>
}