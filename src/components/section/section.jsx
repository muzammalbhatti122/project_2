import { AllCards } from '../allCards/AllCards.1'
import { Cards3 } from '../cards3/cards3'
import { Cards4 } from '../cards4/cards4'
import { ShopingCard } from '../shopingCard/shoping'
import { Slider } from '../slider/slider'

import './section.css'

export function Section() {
    return <div>

        <img id="section-img" src="ba.jpg" alt="" />
        <Cards4></Cards4>
        {/* <Slider></Slider> */}
        <br />
        <br />
        <br />
        <h1>By Addidas</h1>

        <Cards3></Cards3>

        <br />
        <br />
        <br />
        <h1 id='sec-text'>--Products<span id='text-pikha'>Check our new product</span></h1>
        <br />
        <br />
        <br />
        <AllCards></AllCards>
        <br />
        <br />
        <br />
        <br />
        {/* <ShopingCard></ShopingCard> */}
    </div>
}