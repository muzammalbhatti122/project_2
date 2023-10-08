
import { useSelector } from "react-redux"


export function AdminPanal2(){

    let goTochekData = useSelector(function(store){
        return store.adGoToChek.goTo
    })


    return <div>
            {
                    goTochekData.map(function (data) {
                        return <div id='main-detail'>
                            <div id="detai-cards">
                                <b> <span>{data.name}</span></b>

                                <span>Price:{data.price}</span>
                            </div>
                            <div id="detai-cad">
                                <span>size:{data.size} <span>Quantity: 1</span></span>
                                <span id='isDel'>is Deliverd</span>
                            </div>
                            <hr />
                        </div>
                    })
                    
                }

                
    </div>
}