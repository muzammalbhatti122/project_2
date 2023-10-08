import { useSelector } from "react-redux"



export function AddtoCart(){


    let JoDataAyaHa = useSelector(function(s){
        return s.adAllCards
    })

    return <div>
        {
            JoDataAyaHa.map(function(d){
                return <div>

                    <img src={d.pic} alt="" />

                </div>

            })
        }
    </div>
}