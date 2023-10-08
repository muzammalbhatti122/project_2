
import { useState } from 'react';
import './detail.css'


import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"


export function Detail(){
let [selet , Setselect] = useState(1);



const SeletQuty = (evt) =>{
  return Setselect(evt.target.value)

}


  let dispatch = useDispatch();

    let myData = useSelector(function(a){
        return a.adAllCards
    })

    let params = useParams();

    let Findkiya = myData.find(function(d){
        return d.id == params.id
    })

    function goToChekWalaData(){
      dispatch({
        type:'GOTOCHEKDATA',
        find:Findkiya
      })
    }

      


    return <div>
        <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Shoping Cart</h5>
          </div>
          <div className="card-body">
            {/* Single item */}
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                {/* Image */}
                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={Findkiya.pic}  className="w-100"
                    alt="Blue Jeans Jacket"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
                {/* Image */}
              </div>
              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                {/* Data */}
                <p>
                  <strong>{Findkiya.name}</strong>
                </p>
                <p>Latest Modal</p>
                <p>Size: {Findkiya.size}</p>
                <button
                  type="button"
                  className="btn btn-danger btn-sm mb-2"
                  data-mdb-toggle="tooltip"
                  title="Move to the wish list"
                >
                  <i className="fas fa-heart" />
                </button>
                {/* Data */}
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* Quantity */}
                <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                 
                  <div className="form-outline">
                    <input
                    onChange={SeletQuty}
                      id="form1"
                      min={0}
                      name="quantity"
                      defaultValue={selet}
                      type="number"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form1">
                      Quantity
                    </label>
                  </div>
                </div>
                {/* Quantity */}
                {/* Price */}
                <p className="text-start text-md-center">
                  <strong>{Findkiya.price}</strong>
                </p>
                {/* Price */}
              </div>
            </div>
            {/* Single item */}
            <hr className="my-4" />
            {/* Single item */}
            
            {/* Single item */}
          </div>
        </div>
        
        
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>{Findkiya.price}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Pakistan</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>
                  <strong>{Findkiya.price}</strong>
                </span>
              </li>
            </ul>
            <Link to={'/product'}>
            <button onClick={goToChekWalaData} type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout

            </button>
            </Link>
            <br />
            <button  type="button" className="btn btn-primary btn-lg btn-block">
              Go to Payment

            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
}
