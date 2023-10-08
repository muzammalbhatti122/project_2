

import { useSelector } from 'react-redux'
import { Cards3 } from '../cards3/cards3'
import './adminPanal.css'

import { AdminPanal2 } from '../adminPanal2/adminPanal2'


export function AdminPanal() {


    let dtailData = useSelector(function (store) {
        return store.adAllCards
    })

  
    return <div>

        <div id="admin-container">
            <div id="leftSide">
                <div id="box1">
                    <b><span>Dashbord</span></b>
                    <hr />

                    <span>Go To Dashbord</span>
                </div>
                <br />
                <div id="box2">
                    <b><span>Products</span></b>
                    <hr />
                    <br />
                    <span>All Products</span>
                    <br />
                    <br />
                    <span>Live Products</span>
                    <br />
                    <br />
                    <span>Create Products</span>
                </div>
                <br />
                <div id="box3">
                    <b> <span>Orders Detail</span></b>
                    <hr />
                    <br />
                    <span>Panding orders</span>
                    <br />
                    <br />
                    <span>Compelete orders</span>
                </div>
                <br />
                <div id="box4">
                    <b><span>About</span></b>
                    <hr />
                    <br />
                    <span>About US</span>
                    <br />
                    <br />
                    <span>LogOut</span>
                </div>
            </div>


            <div id="rightSide">
                <div id="top-box1">
                    <div id="box-1">

                        <b><span>132</span></b>
                        <br />
                        <span>Total Order</span>
                    </div>
                    <div id="box-2">

                        <b><span>104</span></b>
                        <br />
                        <span>Completed Orders</span>
                    </div>
                    <div id="box-3">

                        <b><span>74011.0</span></b>
                        <br />
                        <span>Tottal Reveneu</span>
                    </div>
                </div>
                <br />
                <div id="top-box2">
                    <div id="box-4">

                        <b><span>Orders</span></b>
                        <br />
                        <span>Year</span>
                        <br />
                        <span>Today</span>
                        <br />
                        <span>Mounthly</span>
                    </div>
                    <div id="box-5">

                        <b><span>Reveneu</span></b>
                        <br />
                        <span>Year</span>
                        <br />
                        <span>Today</span>
                        <br />
                        <span>Order</span>
                    </div>
                    <div id="box-6">

                        <b><span>Completed Orders</span></b>
                        <br />
                        <span>Year</span>
                        <br />
                        <span>Today</span>
                        <br />
                        <span className='text'>Mounthly</span>
                        <span className='text'>Total Order</span>
                    </div>
                </div>
                <br />


                {
                    dtailData.map(function (data) {
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
                <AdminPanal2></AdminPanal2>

                


            </div>

        </div>
        <Cards3></Cards3>
    </div>
}