import { useState } from "react"


import './slider.css'




export function Slider(){

    let [src , setSre] = useState(1);

    function left(){
        src--;
        if(src < 1){

            setSre(3)
        }else{
            setSre(src)

        }
    }

    function right(){
       src++;
       if(src >3){

        setSre(1)
    }else{
        setSre(src)

    }
       
    }

    return <div>

        <div id="slider-container">

        <img id="slide-pic" width={600} height={400} src={'/slide/'+src+'.jpg'}></img>
        
        <div>
            <button onClick={left}>&lt;</button>
            <button onClick={right}>&gt;</button>
        </div>

        </div>
    </div>
}